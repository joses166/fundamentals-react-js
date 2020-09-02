import React from 'react'

export default props => {
    return (
        <div>
            <label htmlFor="passoInput">Passo: </label>
            {/** O + faz com que seja atribuído em numérico o valor */}
            <input
                id="passoInput"
                type="number"
                value={props.passo}
                onChange={e => props.onPassoChange(+e.target.value)}
            />
        </div>
    )
}