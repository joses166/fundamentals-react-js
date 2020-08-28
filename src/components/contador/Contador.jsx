import './Contador.css'
import React, { Component } from 'react'
import Display from './Display'
import PassoForm from './PassoForm'
import Botoes from './Botoes'
import Title from './Title'

export default class Contador extends Component {
    
    state = {
        passo: this.props.passo || 1,
        valor: this.props.valor || 0
    }

    onInc = () => { this.setState({ valor: this.state.valor + this.state.passo }) }
    
    onDec = () => { this.setState({ valor: this.state.valor - this.state.passo }) }
    
    mudarPasso = passo => this.setState({ passo })

    render() {
        return (
            <div className="Contador">

                <Title title={'Contador'} />

                <PassoForm 
                    passo={this.state.passo}
                    onPassoChange={this.mudarPasso}
                />

                <Display valor={this.state.valor} />

                <Botoes 
                    onDecrement={this.onDec}
                    onIncrement={this.onInc}
                />

            </div>
        )
    }

}