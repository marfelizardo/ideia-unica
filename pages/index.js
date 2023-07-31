import { useState } from "react";

function Contador(){

    const [contador,setContador] = useState(1);

    function adicionarContador(){
        setContador(contador + 1);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}

function Home(){
    return (
        <div>
            <h4>Home</h4>
            <Contador />
            <div>Teste</div>
        </div>
    )
}

export default Home