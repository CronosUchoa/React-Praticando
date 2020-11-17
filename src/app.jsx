import React from 'react'
import './App.css'
import Primeiro from './componentes/basicos/Primeiro'
import ComParamentro from './componentes/basicos/ComParamentro'
import ComFilhos from './componentes/basicos/ComFilhos'
import Card from './componentes/layout/Card'
import Repeticao from './componentes/basicos/repeticao'
import Condicional from './componentes/basicos/Condicional'
import CondicionalComIf from './componentes/basicos/CondicionalComIf'
import Pai from './componentes/comunicacao/direta/pai'
import Super from './componentes/comunicacao/indireta/super-dad'
import Input from './componentes/Form/input.jsx'
import Contador from './componentes/contador/Contador'

const Appp = (props) =>(

<div className="App">
{/* <Card titulo="Exercicio X">
    Conteudo
</Card> */}
    <h1>Fundamentos React</h1>

    <div className="Cards">
        <Card titulo="Contador #10" colorRR="#9c0f5f" colorTT="#fff" >
            <Contador></Contador>
        </Card>

        <Card titulo="Input #9" colorRR="#9c0f5f" colorTT="#fff" >
            <Input></Input>
        </Card>

        <Card titulo="Comunicação inDireta #8" colorRR="#CCAAFF" >
            <Super></Super>
        </Card>

        <Card titulo="Comunicação Direta #7" colorRR="#CCAAFF" >
            <Pai sobrenome="uchoa"></Pai>
        </Card>

        <Card titulo="Componente de condicional com if v2 #6" colorR="#FA6900" colorT="#fff">
            <CondicionalComIf numero={6}/>
        </Card>

        <Card  titulo="Componente de condicional v1 #5" colorR="#FA6900" colorT="#fff">
            <Condicional numero={10}></Condicional>
        </Card>

        <Card titulo="Componente de Repetição #4" colorR="#F94C6F" colorT="#fff">
            <Repeticao></Repeticao>
        </Card>

        <Card titulo="Componente com children #3" colorR="#F94C6F" colorT="#fff">
            <ComFilhos>
                <ul>
                    <li>ANAID</li>
                    <li>OLOPA</li>
                </ul>
            </ComFilhos>
        </Card>

        <Card titulo="Componente com Paramentro #2" colorR="#FA6900" colorT="#fff">
            <ComParamentro titulo="Esse é o título" subtitulo="Esse é o subtitulo"></ComParamentro>
            <ComParamentro titulo="opa v2" subtitulo="Esse é o subtitulo v2"/>
        </Card>

        <Card titulo="Primeiro componte #1" colorR="#F94C6F" colorT="#fff">
            <Primeiro></Primeiro>
        </Card>
        </div>
</div>)

export default Appp;