/*12. Crie um componente chamado RemoverNome que contém uma lista de nomes
com o botão "Remover" ao lado que ao ser clicado deve remover o respectivo
nome da lista, conforme o exemplo:: */
import React from 'react'; // Importa o módulo 'react'
import './RemoverNome.css'; // Importa o arquivo de estilo 'RemoverNome.css'

// Declaração do componente funcional 'RemoverNome'
const RemoverNome = () => {

    // Define o estado 'nomes' utilizando o Hook useState, inicializado com um array de nomes
    const [nomes, setNomes] = React.useState(['William', 'Maria', 'Julia', 'Jorge']);

    // Função para remover um nome da lista, recebe o índice do nome a ser removido como parâmetro
    const removerNome = (index) => {
        // Cria uma cópia do array 'nomes' utilizando o spread operator
        const novosNomes = [...nomes];
        // Remove um elemento do array 'novosNomes' no índice especificado
        novosNomes.splice(index, 1);
        // Atualiza o estado 'nomes' com o novo array que não contém o nome removido
        setNomes(novosNomes);
    };

    // Retorna a estrutura JSX do componente 'RemoverNome'
    return (
        <div>
            <h1>Lista de nomes</h1> {/* Título da lista de nomes */}
            <ul>
                {/* Mapeia os elementos do array 'nomes' e renderiza cada nome como um item de lista */}
                {nomes.map((nome, index) => (
                    <li key={index}>
                        {nome} {/* Exibe o nome */}
                        {/* Botão "Remover" que chama a função 'removerNome' passando o índice como argumento */}
                        <button onClick={() => removerNome(index)}>Remover</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RemoverNome; // Exporta o componente 'RemoverNome' para ser utilizado em outros arquivos
