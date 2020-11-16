import React from 'react'

const filhos = props =>
    <div>
        <h2>Children:</h2>
        <div>
            {props.children}
        </div>
    </div>

export default filhos;