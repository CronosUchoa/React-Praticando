import React from 'react'

const filhote = props => 
<div>
    <h3>Componente Filho</h3>
<p>{props.children} - {props.sobrenome}</p>
</div>

export default filhote;