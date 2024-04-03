/* 04. Crie um componente chamado Somar que contém dois campos tipo numérico, e
   um botão "Somar" que ao ser clicado deve somar os dois valores e mostrar o
   resultado, conforme exemplo:   */

   import React from 'react';
   import './Somar.css';
   
   // Declarando o componente funcional 'Somar'
   const Somar = () => {
   
       // Declarando estados para os números de entrada e o resultado da soma
       const [numero1, setNumero1] = React.useState(''); // Estado para o número 1
       const [numero2, setNumero2] = React.useState(''); // Estado para o número 2
       const [resultado, setResultado] = React.useState(''); // Estado para o resultado da soma
   
       // Função para realizar a soma
       const somar = () => {
           // Realizando a soma e atualizando o estado do resultado
           setResultado(+numero1 + +numero2); // O operador "+" converte a string em número
       };
   
       // Retornando o JSX do componente 'Somar'
       return (
           <div className="divPrincipal">
               {/* Campo de entrada para o número 1 */}
               <input type="number" value={numero1} onChange={(event) => setNumero1(+event.target.value)} placeholder="Número 1" />

               + {/* Símbolo de adição */}
               
               {/* Campo de entrada para o número 2 */}
               <input type="number" value={numero2} onChange={(event) => setNumero2(+event.target.value)} placeholder="Número 2" />
               
               <br />
               {/* Botão para realizar a soma */}
               <button className="botao" onClick={somar}>Somar</button>
               <br /> 
               
               {/* Exibição do resultado */}
               <div>  = {resultado}</div>
           </div>
       );
   }
   
   // Exportando o componente 'Somar' como o padrão deste módulo
   export default Somar;
   