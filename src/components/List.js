const List = ()=>{

    const items = [{
            id: 1,
            name: "Pietro"
        },{
            id: 2,
            name: "Joao"

        },{
            id: 3,
            name: "Matheus"
    }]
    return <div>
        {items.map((item)=>(
            <p key={item.id}>
                {item.id}-{item.name}
            </p>
        ))}
    </div>
}

export default List;