import './App.css';
import { useState, useEffect } from 'react';
import { BsTrash, BsBookmarkCheck, BsBookMarkCheckFill} from "react-icons/bs";

const API ="http://localhost:5000"

function App() {
  const [title, setTitle] = useState("")
  const [time, setTime] = useState("")
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const todo = {
      id: Math.random(),
      title,
      time,
      done: false
    }
    //Envio para API
    console.log(todo);

    setTime("")
    setTitle("")
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
        </div>
    </div>
  );
}

export default App;
