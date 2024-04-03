/*03. Crie um componente chamado MostrarTela que contém 3 botões, "Tela I", "Tela
II", "Tela III" ao serem clicados devem mostrar o texto correspondente a tela
clicada, conforme exemplo: */

import React from 'react'; // Importa o módulo React necessário para criar componentes
import './MostrarTela.css'; // Importa o arquivo CSS onde estão definidos os estilos para o componente

const MostrarTela = () => { // Define o componente funcional MostrarTela

    const [resultado, setResultado] = React.useState(null); // Define um estado resultado usando o hook useState, inicializado como null. Esse estado armazenará o texto da tela clicada.

    const telaUm = () => { // Define a função telaUm, que será executada quando o botão "Tela 1" for clicado
        setResultado('Texto da tela I'); // Atualiza o estado resultado com o texto "Texto da tela I"
    };

    const telaDois = () => { // Define a função telaDois, que será executada quando o botão "Tela 2" for clicado
        setResultado('Texto da tela II'); // Atualiza o estado resultado com o texto "Texto da tela II"
    };

    const telaTres = () => { // Define a função telaTres, que será executada quando o botão "Tela 3" for clicado
        setResultado('Texto da tela III'); // Atualiza o estado resultado com o texto "Texto da tela III"
    };

    return(
        <div className='containerBotoes'> {/* Define uma div com a classe CSS botoes-container, que envolve os botões e o elemento de resposta */}
            <div> {/* Define uma div aninhada dentro da div botoes-container */}
                <button onClick={telaUm} className='botao1'>Tela 1</button> {/* Define um botão com a classe CSS botao1 e um manipulador de evento onClick que chama a função telaUm quando clicado */}
                <button onClick={telaDois} className='botao2'>Tela 2</button> {/* Define um botão com a classe CSS botao2 e um manipulador de evento onClick que chama a função telaDois quando clicado */}
                <button onClick={telaTres} className='botao3'>Tela 3</button> {/* Define um botão com a classe CSS botao3 e um manipulador de evento onClick que chama a função telaTres quando clicado */}
                <div className='resposta'>{resultado}</div> {/* Define um elemento div com a classe CSS resposta para exibir o resultado correspondente ao botão clicado */}
            </div> 
        </div> 
    );
};

export default MostrarTela; // Exporta o componente MostrarTela para que ele possa ser usado em outros lugares
