/*11.Crie um componente chamado AdicionarNome que contém um campo do tipo
texto e um botão "Adicionar" que ao ser clicado deve adicionar o nome digitado
em uma lista e mostrar conforme exemplo: */

import React from 'react'; // Importa o módulo 'react'
import './AdicionarNome.css'; // Importa o arquivo de estilo 'AdicionarNome.css'

// Declaração do componente funcional 'AdicionarNome'
const AdicionarNome = () => {

    // Declaração dos estados 'nome' e 'listaNomes' usando React Hooks
    const [nome, setNome] = React.useState(''); // 'nome' guarda o valor do input; 'setNome' é a função para atualizar 'nome'
    const [listaNomes, setListaNomes] = React.useState([]); // 'listaNomes' guarda a lista de nomes adicionados; 'setListaNomes' é a função para atualizar 'listaNomes'

    // Função para adicionar nomes à lista
    const adicionarNomes = () => {
        // Verifica se 'nome' não está vazio ou só contém espaços em branco
        if (nome.trim() !== '') {
            // Adiciona o nome atual à lista de nomes usando spread operator
            setListaNomes([...listaNomes, nome]);
            // Limpa o campo de input 'nome' após adicionar o nome à lista
            setNome('');
        }
    };

    // Retorna a estrutura JSX do componente 'AdicionarNome'
    return (
        <div className='divPrincipal'> {/* Define a classe CSS 'divPrincipal' para a div principal */}
            <input type="text" value={nome} onChange={(event) => setNome(event.target.value)} placeholder='Digite un nome' /> {/* Input controlado que guarda o valor no estado 'nome' */}
            <button className='botao' onClick={adicionarNomes}> Adicionar</button> {/* Botão para adicionar nomes, que chama a função 'adicionarNomes' */}
            <ul> {/* Lista não ordenada para exibir os nomes adicionados */}
                {/* Mapeia os itens da lista de nomes e renderiza cada nome como um item de lista */}
                {listaNomes.map((nome, index) => (
                    <li key={index}> {/* Define uma chave única para cada item da lista */}
                        {nome} {/* Exibe o nome */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdicionarNome; // Exporta o componente 'AdicionarNome' para ser usado em outros arquivos
