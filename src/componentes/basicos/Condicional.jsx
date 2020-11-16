import React from 'react'

let cond = props => {
    return(
        <div>
            <h2>O número é {props.numero}</h2>
            {
                props.numero % 2 === 0 ?
                <span>eh par</span>
                    :
                <span>eh impar</span>
            }
        </div>
    )
}

export default cond;