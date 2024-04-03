/* 01. Crie um componente chamado BotaoContador que contém um botão com a
descrição "Contador é: xx", ao clicar no botão o número deve ser incrementado
em 1, conforme exemplo: */

import React from 'react';
import './BotaoContador.css'; // Importa o arquivo de estilos para o componente

// Declaração do componente BotaoContador
const BotaoContador = () => {
    // Define o estado do número inicial como 0 usando o hook useState
    const [numero, setNumero] = React.useState(0);

    // Função que será chamada ao clicar no botão para incrementar o número
    const contador = () => {
        // Atualiza o estado do número incrementando 1 ao valor atual
        setNumero(numero + 1);
    };

    // Renderização do componente
    return (
        <div className='divBotaoContador'> {/* Define a classe CSS para o estilo do componente */}
        
            {/* Botão que ao ser clicado chama a função contador e exibe o número */}
            <button onClick={contador}  className='botaoContador'>O número é: {numero}</button>
        </div>
    );
};

export default BotaoContador; // Exporta o componente BotaoContador para ser utilizado em outros lugares
