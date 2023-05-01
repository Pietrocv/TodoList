import { useState } from "react"

const RenderCond = ({x, y}) =>{

    const[novoX, setNovoX] = useState(4)

    const ChangeXValue = () =>{
        setNovoX(10)
    }

    return(
        <div>
            <button onClick={ChangeXValue}></button>
            {x > 5 && <p>X É MAIOR QUE 10</p>}
            {x > 5 ? <p>X É NUMERO ALTO</p>:<p>X É NUMERO BAUIXO</p>}
            {novoX > 5 && <p>NOVOX É MAIOR QUE 10</p>}
            <p>O valor de Y é: {y}</p>
        </div>
    )
}

export default RenderCond