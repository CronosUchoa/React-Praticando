import React from 'react'
import If from './If'
let cond = props => {
    return(
        <div>
            <h2>O número é {props.numero}</h2>
            <If test={props.numero % 2 === 0}>
                <span>eh par</span>
            </If>
            <If test={props.numero % 2 === 1}>
            <span>eh impar</span>
            </If>
                
        </div>
    )
}

export default cond;