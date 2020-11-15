import React from 'react'
import './App.css'
import Primeiro from './layout/Primeiro'
import ComParamentro from './layout/ComParamentro'
import ComFilhos from './layout/ComFilhos'
import Card from './layout/Card'
import Repeticao from './layout/repeticao'
import Condicional from './layout/Condicional'
import CondicionalComIf from './layout/CondicionalComIf'

const Appp = (props) =>(

<div className="App">
<Card titulo="Exercicio X">
    Conteudo
</Card>

<Card titulo="Componente de condicional com if v2 #6">
    <CondicionalComIf numero={6}/>
</Card>

<Card  titulo="Componente de condicional v1 #5">
    <Condicional numero={10}></Condicional>
</Card>

<Card titulo="Componente de Repetição #4">
    <Repeticao></Repeticao>
</Card>

<Card titulo="Componente com children #3">
    <ComFilhos>
        <ul>
            <li>ANAID</li>
            <li>OLOPA</li>
        </ul>
    </ComFilhos>
</Card>

<Card titulo="Componente com Paramentro #2">
    <ComParamentro titulo="Esse é o título" subtitulo="Esse é o subtitulo"></ComParamentro>
    <ComParamentro titulo="opa v2" subtitulo="Esse é o subtitulo v2"/>
</Card>

<Card titulo="Primeiro componte #1">
    <Primeiro></Primeiro>
</Card>
</div>)

export default Appp;