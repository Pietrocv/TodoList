import { useEffect, useState } from "react"

const Hooks = () =>{

    let idade = 30
    const [novaIdade, setNovaIdade] = useState(31)

    const changeAge = () => {
        idade = 50
        console.log(idade)
    }

    const ChangeNewAge = () =>{
        setNovaIdade(45)
    }

    //Interessante para trazer dados ao carregar a página, por exemplo de uma API
    useEffect(()=>{
        console.log("Testando")
    })

    return(
        <div>
            <p>Idade: {idade}</p>
            <button onClick={changeAge}>Mudar Idade</button>
            <p>Nova Idade: {novaIdade}</p>
            <button onClick={ChangeNewAge}>Mudar Nova Idade</button>
        </div>
    )
}

export default Hooks;