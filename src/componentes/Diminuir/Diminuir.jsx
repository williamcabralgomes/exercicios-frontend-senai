/*05. Crie um componente chamado Diminuir que contém dois campos tipo numérico,
e um botão "Diminuir" que ao ser clicado deve diminuir os dois valores e mostrar
o resultado, conforme exemplo:*/

import React from 'react';
import './Diminuir.css';

// Definição do componente funcional Diminuir
const Diminuir = () => {

    // Definição dos estados para os números de entrada e o resultado da subtração
    const [numero1, setNumero1] = React.useState(''); // Estado para o primeiro número
    const [numero2, setNumero2] = React.useState(''); // Estado para o segundo número
    const [resultado, setResultado] = React.useState(''); // Estado para o resultado da subtração

    // Função para realizar a subtração
    const subtracao = () => {
        // Realiza a subtração e atualiza o estado 'resultado'
        setResultado(numero1 - numero2);
    };

    // Retorno do JSX do componente Diminuir
    return (
        <div className='divPrincipal'>
            {/* Campo de entrada para o número 1 */}
            <input type="number" value={numero1} onChange={(event) => setNumero1(event.target.value)} placeholder='Numero 1' />

            - {/* Símbolo de subtração */}
            
            {/* Campo de entrada para o número 2 */}
            <input type="number" value={numero2} onChange={(event) => setNumero2(event.target.value)} placeholder='Numero 2' />

            <div>
                {/* Botão para realizar a subtração */}
                <button className='botao' onClick={subtracao}>Subtrair</button>
            </div>

            {/* Exibição do resultado */}
            <div> = {resultado}</div>
        </div>
    );
};

// Exportação do componente Diminuir
export default Diminuir;
