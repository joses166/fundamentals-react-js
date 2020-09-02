import React, { useState } from 'react'

export default (props) => {
    // Adiciona a quantidade de valores do array com valor inicial de cada um
    const [numeros, setNumeros] = useState(Array(props.qtdeNumeros || 6).fill(0)) 
    
    function gerarNumerosNaoContido(array) {
        const min = 1
        const max = 60
        const novoNumero = parseInt(Math.random() * (max - min)) + min
        return array.includes(novoNumero) ? gerarNumerosNaoContido(array) : novoNumero
    }

    function gerarNumeros() {
        const novoArray = Array(props.qtdeNumeros)
                            .fill(0)
                            .reduce(a => [...a, gerarNumerosNaoContido(a)], [])
                            .sort((a, b) => a - b) // Ordem crescente
        setNumeros(novoArray);
    }

    return (
        <>
            <h3>Mega Sena</h3>
            <h4>{numeros.join(' ')}</h4>
            <button onClick={gerarNumeros}>Gerar Números</button>
        </>
    )
}