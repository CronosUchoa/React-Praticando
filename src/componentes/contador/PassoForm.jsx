import React from 'react'


const logg =  (props) => {

    return(
        <div>
        <label for="passoInput">Passo:{props.passo}</label>
        {/*Esse  + na frente de e.target é para garantir que é um numerico */}
        <input id="passoInput" type="number" style={{fontSize:'1.4rem'}}
        value={props.passo}
        onChange={(e)=>props.onPassoChange(+e.target.value)}/>
        </div> 
    );

};

export default logg;