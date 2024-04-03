/*Exercício EXTRA */


import React from 'react'; // Importa o módulo 'react'
import './CriarERemoverListaNomes.css'; // Importa o arquivo de estilo 'CriarERemoverListaNomes.css'

// Declaração do componente funcional 'CriarERemoverListaNomes'
const CriarERemoverListaNomes = () => {
    // Define os estados locais 'nome' e 'listaNomes' utilizando o Hook useState do React
    const [nome, setNome] = React.useState(''); // Estado para armazenar o valor do input de texto
    const [listaNomes, setListaNomes] = React.useState([]); // Estado para armazenar a lista de nomes

    // Função para adicionar nomes à lista
    const adicionarNomes = () => {
        // Verifica se o valor do input de texto não está vazio ou só contém espaços em branco
        if (nome.trim() !== '') {
            // Adiciona o valor atual do input de texto à lista de nomes usando spread operator
            setListaNomes([...listaNomes, nome]);
            // Limpa o input de texto definindo-o como uma string vazia
            setNome('');
        }
    };

    // Função para remover um nome da lista com base no índice
    const removerNome = (index) => {
        // Cria um novo array contendo apenas os nomes cujo índice não é igual ao índice fornecido
        const novosNomes = listaNomes.filter((elemento, i) => i !== index);
        // Atualiza o estado 'listaNomes' com o novo array sem o nome removido
        setListaNomes(novosNomes);
    };

    // Retorna a estrutura JSX do componente
    return (
        <div className='divPrincipal'> {/* Define uma div com a classe CSS 'divPrincipal' */}
            <div className='inputContainer'> {/* Define um container para o input e botão */}
                {/* Input de texto controlado pelo estado 'nome' e com um placeholder */}
                <input type="text" value={nome} onChange={(event) => setNome(event.target.value)} placeholder='Digite um nome' className="inputNome" />
                {/* Botão para adicionar nomes, que chama a função 'adicionarNomes' quando clicado */}
                <button className='botao' onClick={adicionarNomes}>Adicionar</button>
            </div>
            <h3>Lista de nomes</h3> {/* Título da lista de nomes */}
            <ul className="listaNomes"> {/* Lista não ordenada para exibir os nomes */}
                {/* Mapeia os elementos do array 'listaNomes' e renderiza cada nome como um item de lista */}
                {listaNomes.map((nome, index) => (
                    <li key={index}> {/* Define uma chave única para cada item da lista */}
                        {nome} {/* Exibe o nome */}
                        {/* Botão "Remover" que chama a função 'removerNome' com o índice do nome como argumento */}
                        <button onClick={() => removerNome(index)}>Remover</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CriarERemoverListaNomes; // Exporta o componente 'CriarERemoverListaNomes' para ser utilizado em outros arquivos
