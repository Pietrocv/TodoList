import './App.css';
import { useState, useEffect } from 'react';
import { BsTrash, BsBookmarkCheck, BsBookMarkCheckFill, BsBookmarkCheckFill} from "react-icons/bs";
import { IconName } from "react-icons/bs";

//Declarando a API 
const API ="http://localhost:5000"

function App() {

  //Declarando as váriaveis dos TODOS
  const [title, setTitle] = useState("")
  const [time, setTime] = useState("")
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)

  //Carregando os TODOS na página, função async só permite depois de carregar tudo
  useEffect(() =>{ 
    const loadData = async() => {
      setLoading(true)

      const res = await fetch(API + "/todos")
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => console.log(err))

      setLoading(false)

      setTodos(res)
    }
    
    loadData()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    //Declarando o TODO
    const todo = {
      id: Math.random(),
      title,
      time,
      done: false
    }
    //Usando Fetch API para enviar os dados para o servidor
    await fetch(API + "/todos", {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      },
    })
    //Verficando se o o todo já foi enviado
    setTodos((prevState) => [...prevState, todo])
    //Limpando as informações para que o usuário coloque mais informações
    setTime("")
    setTitle("")
  }
  //Metódo que deleta
  const handleDelete = async (id) =>{
    await fetch(API + "/todos/" + id, {
      method: "DELETE",
    })
    //Verificando se o TODO é diferente do TODO que foi deletado
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id)) 
  }

  const handleEdit = async (todo) =>{
    todo.done = !todo.done

    const data = await fetch(API + "/todos/" + todo.id, {
      method: "PUT",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      },
      
    })

    setTodos((prevState) => prevState.map((t) => (t.id === data.id) ? (t=data): t)) 
  }

  if(loading){
    return <p>Aguarde um segundo, estamos carregando suas informações!</p>
  }


  return (
    <div className="App">
        <div className='todo-header'>
            <h1>REACT TODO</h1>
        </div>
        <div className="form-todo">
            <h2>Insira sua próxima tarefa:</h2>
            <form onSubmit={handleSubmit}>
              <div className='form-control'>
                <label htmlFor='title'>O que você vai fazer hoje?</label>
                <input 
                  type="text" 
                  name="title" 
                  placeholder="Título da Tareda" 
                  onChange={(e) => setTitle(e.target.value)} 
                  value={title || ""} 
                  required>
                    
                  </input>
              </div>
              <div className='form-control'>
                <label htmlFor='time'>Duração:</label>
                <input type="time" name="time" placeholder="Tempo Estimado" onChange={(e) => setTime(e.target.value)} value={time || ""} required></input>
              </div>
            <input type="submit" value="Criar Tarefa"></input>
            </form>
        </div>
        <div className="list-todo">
            <h2>Lista de Tarefas:</h2>
            {todos.length === 0 && <p>Não há tarefas!</p>}
            {todos.map((todo) =>(
              <div className="todo" key={todo.id}>
                <h3 className={todo.done ? "todo-done" : ""}>{todo.title}</h3>
                <p>Duração: {todo.time}</p>
                <div className="actions">
                  <span onClick={() => handleEdit(todo)}>
                    {!todo.done ? <BsBookmarkCheck/> : <BsBookmarkCheckFill/>}
                  </span>
                  <BsTrash onClick={() => handleDelete(todo.id)}></BsTrash>
                </div>
              </div>
            ))}
        </div>
    </div>
  );
}

export default App;
