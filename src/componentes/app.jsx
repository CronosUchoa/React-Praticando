import React from 'react'
import Primeiro from './layout/Primeiro'
import ComParamentro from './layout/ComParamentro'
import ComFilhos from './layout/ComFilhos'
import Card from './layout/Card'
import './App.css'

const Appp = (props) =>(

<div className="App">
<Card titulo="Exercicio X">
    Conteudo
</Card>

<Card titulo="Exercicio 3">
    <ComFilhos>
        <ul>
            <li>ANAID</li>
            <li>OLOPA</li>
        </ul>
    </ComFilhos>
</Card>

<Card titulo="Exercicio 2">
    <ComParamentro titulo="Esse é o título" subtitulo="Esse é o subtitulo"></ComParamentro>
    <ComParamentro titulo="opa v2" subtitulo="Esse é o subtitulo v2"/>
</Card>

<Card titulo="Exercicio 1">
    <Primeiro></Primeiro>
</Card>
</div>)

export default Appp;