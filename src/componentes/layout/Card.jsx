import React from 'react'
import './Card.css'

const cardzinho = props =>
<div className="Card" style={{borderColor: props.colorRR || '#FFF'}}>
    <div className="Conteudo" style={{backgroundColor: props.colorR || '#fff', color:props.colorT || '#000'} }>
        {props.children}
    </div>
    <div className="Footer"style={{backgroundColor: props.colorRR || '#FFF', color:props.colorTT || '#000'}} >
        {props.titulo}
    </div>
</div>

export default cardzinho;