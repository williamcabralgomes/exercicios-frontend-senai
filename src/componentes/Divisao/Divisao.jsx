/* 07. Crie um componente chamado Dividir que contém dois campos tipo numérico, e
   um botão "Dividir" que ao ser clicado deve multiplicar os dois valores e mostrar o
   resultado, conforme exemplo: */

import React from 'react';
import './Divisao.css';

// Definição do componente funcional Divisao
const Divisao = () => {
    // Definição dos estados para os números de entrada e o resultado da divisão
    const [numero1, setNumero1] = React.useState(''); // Estado para o primeiro número
    const [numero2, setNumero2] = React.useState(''); // Estado para o segundo número
    const [resultado, setResultado] = React.useState(''); // Estado para o resultado da divisão

    // Função para realizar a divisão
    const dividir = () => {
        // Realiza a divisão e atualiza o estado 'resultado'
        setResultado(numero1 / numero2);
    };

    // Retorno do JSX do componente Divisao
    return (
        <div className='divPrincipal'>
            {/* Campo de entrada para o número 1 */}
            <input type="number" value={numero1} onChange={(event) => setNumero1(event.target.value)} placeholder='Numero 1' />

            / {/* Símbolo de divisão */}
            
            {/* Campo de entrada para o número 2 */}
            <input type="number" value={numero2} onChange={(event) => setNumero2(event.target.value)} placeholder='Numero 2' />

            <div>
                {/* Botão para realizar a divisão */}
                <button className='botao' onClick={dividir}>Dividir</button>
            </div>

            {/* Exibição do resultado */}
            <div> = {resultado}</div>
        </div>
    );
};

// Exportação do componente Divisao
export default Divisao;
