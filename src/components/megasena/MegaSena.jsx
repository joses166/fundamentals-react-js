import React, { Component } from 'react'

export default class MegaSena extends Component {

    state = {
        nro1: 0,
        nro2: 0,
        nro3: 0,
        nro4: 0,
        nro5: 0,
        nro6: 0
    }

    onGenerate = () => {
        this.setState({
            nro1: parseInt(Math.random() * 100),
            nro2: parseInt(Math.random() * 100),
            nro3: parseInt(Math.random() * 100),
            nro4: parseInt(Math.random() * 100),
            nro5: parseInt(Math.random() * 100),
            nro6: parseInt(Math.random() * 100)
        })
    }

    render() {
        return (
            <div className="megaSena">

                <h2> Mega Sena </h2>
                <p>
                    {
                        `
                        ${ this.state.nro1} - 
                        ${ this.state.nro2} - 
                        ${ this.state.nro3} - 
                        ${ this.state.nro4} - 
                        ${ this.state.nro5} - 
                        ${ this.state.nro6} 
                        `
                    }
                </p>

                <button onClick={this.onGenerate}> Gerar Números </button>

            </div>
        )
    }

}