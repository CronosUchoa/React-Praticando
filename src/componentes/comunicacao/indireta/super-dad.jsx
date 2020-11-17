import React, {useState} from 'react'
import Sub from './sub-son'

// const papaa =
// eslint-disable-next-line import/no-anonymous-default-export
var count = 0;
// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  
    

    const [num, setNum] = useState(0);
    const [texto, setTexto] = useState("Valor");

    function quandoClicar(texto){            
        setTexto(texto);
        setNum(contador()); 
    }

   
    function contador() 
    {
        
        count++;
        return count;

    };
   

    return (
        <div>
            <h3>{texto}: {num}</h3>
            <Sub Clicar={quandoClicar}></Sub>
        </div>
    );
};



// export default papaa;