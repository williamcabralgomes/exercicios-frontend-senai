/* 08. Considere o valor do dólar igual a R$5,00. Crie um componente chamado
        CambioDolar que contém dois campos tipo numérico, ao ser digitado a valor em
        real deve ser calculado o valor em dólar e o contrário também deve ocorrer,
        conforme exemplo: */

import React from 'react';
import './CambioDolar.css';

const valorDolar = 5; // Valor do dólar em reais

const CambioDolar = () => {
    const [dolar, setCampoDolar] = React.useState('');
    const [real, setCampoReal] = React.useState('');

    const cambioReal = (event) => {
        const valorReal = event.target.value;
        const valorDolarCalculado = (valorReal * valorDolar).toFixed(2);
        setCampoReal(valorReal);
        setCampoDolar(valorDolarCalculado);
        
    };

    const cambioDolar = (event) => {
        const valorDolar = event.target.value;
        const valorRealCalculado = (valorDolar / valorDolar).toFixed(2);
        setCampoDolar(valorDolar);
        setCampoReal(valorRealCalculado);
    };

    return (
        <div className='divPrincipal'>
            {/* Campo de entrada para o valor em reais */}
            <input type="number" value={real} onChange={cambioReal} placeholder='Real' />
            {/* Símbolo de multiplicação */}
            <span>reais é igual a</span>
          
            {/* Campo de entrada para o valor do dólar */}
            <input type="number" value={dolar} onChange={cambioDolar} placeholder='Dolar' />
            
            {/* Símbolo de igual */}
            <span>Dolares</span>
        </div>
    );
};

export default CambioDolar;
