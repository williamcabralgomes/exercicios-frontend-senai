/* 02. Crie um componente chamado Contador que contém dois botões, um para
        somar 1 ao ser clicado e outro para diminuir 1 ao ser clicado, e mostre o valor
        atual no meio entre os dois botões, conforme exemplo: */

import React from 'react';
import './Contador.css'; // Importa o arquivo de estilos para o componente

// Declaração do componente Contador
const Contador = () => {
    // Define o estado inicial do resultado como 0 usando o hook useState
    const [resultado, setResultado] = React.useState(0);

    // Função que será chamada ao clicar no botão para adicionar 1 ao resultado
    const maisNumero = () => {
        // Atualiza o estado do resultado adicionando 1 ao valor atual
        setResultado(resultado + 1);
    };

    // Função que será chamada ao clicar no botão para subtrair 1 do resultado
    const menosNumero = () => {
        // Atualiza o estado do resultado subtraindo 1 do valor atual
        setResultado(resultado - 1);
    };

    // Renderização do componente
    return (
        <div className='divContador'> {/* Define a classe CSS para o estilo do componente */}

            {/* Botão para adicionar 1 ao resultado */}
            <button onClick={maisNumero}  className='botaoMais1'>+ 1</button> 

            {/* Elemento de espaço */}
            <span style={{ margin: '0 10px' }}></span>

            {/* Exibe o valor atual do resultado */}
            {resultado}

            {/* Elemento de espaço */}
            <span style={{ margin: '0 10px' }}></span>

            {/* Botão para subtrair 1 do resultado */}
            <button onClick={menosNumero} className='botaoMenos1'>- 1</button>

        </div>
    );
};

export default Contador; // Exporta o componente Contador para ser utilizado em outros lugares
