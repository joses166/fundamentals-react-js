import React, { useState } from 'react'
import Sub from './Sub'

export default (props) => {

    const [ text, setText ] = useState('Valor')
    const [ num, setNum ] = useState(0)

    function quandoClicar(valorGerado, texto) {
        setText(texto)
        setNum(valorGerado)
    }
    
    return (
        <div>
            <h4>{text}: {num}</h4>
            <Sub onClicar={quandoClicar}></Sub>
        </div>
    )
}
