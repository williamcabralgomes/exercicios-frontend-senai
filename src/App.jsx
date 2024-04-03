import BotaoContador from'./componentes/BotaoContador/BotaoContador';
import Contador from'./componentes/Contador/Contador';
import MostrarTela from './componentes/MostrarTela/MostrarTela';
import Somar from './componentes/Somar/Somar'
import Diminuir from './componentes/Diminuir/Diminuir';
import Multiplicar from './componentes/Multiplicar/Multiplicar';
import Divisao from './componentes/Divisao/Divisao';
import CambioDolar from './componentes/CambioDolar/CambioDolar';
import CambioEuro from './componentes/CambioEuro/CambioEuro';
import CalculoIMC from './componentes/CalculoIMC/CalculoIMC';
import AdicionarNome from './componentes/AdicionarNome/AdicionarNome';
import RemoverNome from './componentes/RemoverNome/RemoverNome';
import CriarERemoverListaNomes from './componentes/CriarERemoverListaNomes/CriarERemoverListaNomes';

function App() {
  return (
    <>
      <span> 
        01 - 1. Crie um componente chamado BotaoContador que contém um botão com a
        descrição "Contador é: xx", ao clicar no botão o número deve ser incrementado
        em 1, conforme exemplo:
        </span>
       <BotaoContador/>
      <hr />

      <span>
        02. Crie um componente chamado Contador que contém dois botões, um para
        somar 1 ao ser clicado e outro para diminuir 1 ao ser clicado, e mostre o valor
        atual no meio entre os dois botões, conforme exemplo:
      </span>
      <Contador/>
      <hr />

      <span>
        03. Crie um componente chamado MostrarTela que contém 3 botões, "Tela I", "Tela
        II", "Tela III" ao serem clicados devem mostrar o texto correspondente a tela
        clicada, conforme exemplo:
      </span>
      <MostrarTela/>
      <hr />
       
      <span>
        04. Crie um componente chamado Somar que contém dois campos tipo numérico, e
        um botão "Somar" que ao ser clicado deve somar os dois valores e mostrar o
        resultado, conforme exemplo:  
      </span>
      <Somar/> 
       <hr />

      <span>
        05. Crie um componente chamado Diminuir que contém dois campos tipo numérico,
        e um botão "Diminuir" que ao ser clicado deve diminuir os dois valores e mostrar
        o resultado, conforme exemplo:
      </span>
      <Diminuir/>
      <hr />

      <span>
      06. Crie um componente chamado Dividir que contém dois campos tipo numérico, e
        um botão "Dividir" que ao ser clicado deve multiplicar os dois valores e mostrar o
        resultado, conforme exemplo:
      </span>
      <Multiplicar/>
      <hr />

      <span>
        07. Crie um componente chamado Dividir que contém dois campos tipo numérico, e
        um botão "Dividir" que ao ser clicado deve multiplicar os dois valores e mostrar o
        resultado, conforme exemplo:
      </span>
      <Divisao/>
      <hr />

      <span>
        08. Considere o valor do dólar igual a R$5,00. Crie um componente chamado
        CambioDolar que contém dois campos tipo numérico, ao ser digitado a valor em
        real deve ser calculado o valor em dólar e o contrário também deve ocorrer,
        conforme exemplo:
      </span>
      <CambioDolar/>
      <hr />

      <span>
        09. Considere o valor do euro igual a R$5,50. Crie um componente chamado
        CambioEuro que contém dois campos tipo numérico, ao ser digitado a valor em
        real deve ser calculado o valor em euro e o contrário também deve ocorre,
        conforme exemplo:
      </span>
      <CambioEuro/>
      <hr />

      <span>
        10. Considere a fórmula do IMC = peso / (altura * altura) e status: 18.5 = "Abaixo do
        peso", 25 = "Peso normal", 30 = "Sobrepeso" e acima de 30 = "Obeso" . Crie um
        componente chamado CalculoIMC que contém dois campos tipo numérico, e um
        botão "Calcular IMC" que ao ser clicado deve fazer o cálculo e mostrar o
        resultado, conforme exemplo:
      </span>
      <CalculoIMC/>
      <hr />

      <span>
        11.Crie um componente chamado AdicionarNome que contém um campo do tipo
        texto e um botão "Adicionar" que ao ser clicado deve adicionar o nome digitado
        em uma lista e mostrar conforme exemplo:
      </span>
      <AdicionarNome/>
      <hr />

      <span>
        12. Crie um componente chamado RemoverNome que contém uma lista de nomes
        com o botão "Remover" ao lado que ao ser clicado deve remover o respectivo
        nome da lista, conforme o exemplo:
      </span>
      <RemoverNome/>
      <hr />

      <span>
        ..........................
      </span>
      <CriarERemoverListaNomes/>

    </>
  );
}

export default App;
