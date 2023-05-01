const AnotherComponent = () =>{
    const handleClick = () =>{
        console.log("Clicou no botão")
    };

    return(
        <div>
            <p>Segundo Componente</p>
            <button onClick={handleClick}>Evento de Click</button>
            <hr></hr>
            <button onClick={() => console.log("Teste")}>Evento no elemento</button>
        </div>
    );
};

export default AnotherComponent;