/* 06. Crie um componente chamado Dividir que contém dois campos tipo numérico, e
   um botão "Dividir" que ao ser clicado deve multiplicar os dois valores e mostrar o
   resultado, conforme exemplo: */

   import React from 'react';
import './Multiplicar.css';

// Definição do componente funcional Multiplicar
const Multiplicar = () => {

    // Definição dos estados para os números de entrada e o resultado da multiplicação
    const [numero1, setNumero1] = React.useState(''); // Estado para o primeiro número
    const [numero2, setNumero2] = React.useState(''); // Estado para o segundo número
    const [resultado, setResultado] = React.useState(''); // Estado para o resultado da multiplicação

    // Função para realizar a multiplicação
    const multiplicar = () => {
        // Realiza a multiplicação e atualiza o estado 'resultado'
        setResultado(numero1 * numero2);
    }

    // Retorno do JSX do componente Multiplicar
    return (
        <div className='divPrincipal'>
            {/* Campo de entrada para o número 1 */}
            <input type="number" value={numero1} onChange={(event) => setNumero1(event.target.value)} placeholder='Numero 1' />

            * {/* Símbolo de multiplicação */}
            
            {/* Campo de entrada para o número 2 */}
            <input type="number" value={numero2} onChange={(event) => setNumero2(event.target.value)} placeholder='Numero 2' />
            
            <div>
                {/* Botão para realizar a multiplicação */}
                <button className='botao' onClick={multiplicar}>Multiplicar</button>
            </div>
            
            {/* Exibição do resultado */}
            <div> = {resultado}</div>
        </div>
    );
};

// Exportação do componente Multiplicar
export default Multiplicar;
