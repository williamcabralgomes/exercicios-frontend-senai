/*10. Considere a fórmula do IMC = peso / (altura * altura) e status: 18.5 = "Abaixo do
peso", 25 = "Peso normal", 30 >= "Sobrepeso" e acima de 30 = "Obeso" . Crie um
componente chamado CalculoIMC que contém dois campos tipo numérico, e um
botão "Calcular IMC" que ao ser clicado deve fazer o cálculo e mostrar o
resultado, conforme exemplo: */

import React from 'react'; // Importa o módulo React
import './CalculoIMC.css'; // Importa o arquivo de estilos CSS

// Declaração do componente CalculoIMC
const CalculoIMC = () => {

    // Declaração de estados para armazenar o peso, altura e resultado do IMC
    const [peso, setPeso] = React.useState(''); // Estado para o peso
    const [altura, setAltura] = React.useState(''); // Estado para a altura
    const [resultado, setResultado] = React.useState(''); // Estado para o resultado do IMC

    // Função para calcular o IMC
    const calcularIMC = () => {

        // Verifica se o peso e a altura foram preenchidos
        if (peso && altura) {

            // Calcula o IMC
            const imc = peso / (altura * altura);
            let status;

            // Define o status do IMC com base nos valores padrão
            if (imc < 18.5) {
                status = 'Abaixo do peso';
            } else if (imc <= 25) {
                status = 'Peso normal';
            } else if (imc <= 30) {
                status = 'Acima do peso';
            } else {
                status = 'Obeso';
            }

            // Atualiza o estado do resultado com o IMC calculado e seu status
            setResultado(`Seu IMC é ${imc.toFixed(2)} - ${status}`);
            
        } else {
            // Se o peso e a altura não forem preenchidos, exibe uma mensagem de erro
            setResultado('Preencha o peso e a altura');
        }
    };

    // Renderização do componente
    return (
        <div className='divPrincipal'>
            {/* Campo de entrada para o peso */}
            <input type="number" value={peso} onChange={(event) => setPeso(event.target.value)} placeholder="Peso (kg)" />

            {/* Sinal de divisão */}
            <span>/</span>

            {/* Campo de entrada para a altura */}
            <input type="number" value={altura} onChange={(event) => setAltura(event.target.value)} placeholder="Altura (m)" />

            {/* Botão para calcular o IMC */}
            <button className='botao' onClick={calcularIMC}>Calcular IMC</button>
            
            {/* Exibe o resultado do IMC */}
            <div>{resultado}</div>
        </div>
    );
};

// Exporta o componente CalculoIMC para ser utilizado em outros arquivos
export default CalculoIMC;
