import React from 'react'
import Filho from './filho'

const papa = props => 
<div>
    <Filho sobrenome="Souza">Gab</Filho>
    <Filho sobrenome="Magalhães">Mig</Filho>
    <Filho {...props}>Apo</Filho>
    <Filho sobrenome={props.sobrenome}>Dia</Filho>
</div>

export default papa;