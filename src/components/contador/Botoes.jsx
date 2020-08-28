import React from 'react'

export default props => {
    return (
        <div>
            <button onClick={props.onDecrement} >-</button>
            <button onClick={props.onIncrement} >+</button>
        </div>
    )
}