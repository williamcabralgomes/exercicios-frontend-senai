/*09. Considere o valor do euro igual a R$5,50. Crie um componente chamado
CambioEuro que contém dois campos tipo numérico, ao ser digitado a valor em
real deve ser calculado o valor em euro e o contrário também deve ocorre,
conforme exemplo: */

import React from 'react';
// Importação do arquivo de estilos CSS
import './CambioEuro.css';

const valorEuro = 5.5; // Valor do dólar em reais

const CambioEuro = () => {
    const [euro, setCampoEuro] = React.useState('');
    const [real, setCampoReal] = React.useState('');

    const cambioReal = (event) => {
        const valorReal = event.target.value;
        const valorEuroCalculado = valorReal * valorEuro.toFixed(2);
        setCampoReal(valorReal);
        setCampoEuro(valorEuroCalculado);
    }
    const CambioEuro = (event) =>{
        const valorEuro = event.target.value;
        const valorRealCalculado = valorEuro / valorEuro.toFixed(2);
        setCampoEuro(valorEuro);
        setCampoReal(valorRealCalculado) ; 
    };

    return (
        <div className='divPrincipal'>
            {/* Campo de entrada (input)para o valor em reais */}
            <input type="number" value={real} onChange={cambioReal} placeholder='Real' />

            {/* Símbolo de multiplicação */}
            <span>reais é igual a</span>

          
            {/* Campo de entrada (input) para o valor do dólar */}
            <input type="number" value={euro} onChange={CambioEuro} placeholder='Euro' />
            
            {/* Símbolo de igual */}
            <span>Euros</span>
        </div>
    );
};

// Exportação do componente CambioEuro
export default CambioEuro;
