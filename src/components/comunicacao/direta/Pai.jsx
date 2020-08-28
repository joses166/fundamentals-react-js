import React from 'react'
import Filho from './Filho'

export default (props) => {
    return (
        <div>
            <Filho {...props} > 
                <strong>José</strong>
            </Filho>
            <Filho sobrenome={props.sobrenome} > 
                <strong>Paulo</strong>
            </Filho>
            <Filho sobrenome="Brandão" > 
                <strong>Júlio</strong>
            </Filho>
        </div>
    )
}
