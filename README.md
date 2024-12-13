# 14º Projeto: My Wallet
<p align="center">
<img src="https://github.com/prtpj1/prtpj1/blob/main/Headers/14-My-Wallet.jpg?raw=true" alt="Header" />
</p>
<hr/>
<p align="center">
<a href="#project-description">Project Description</a> •
<a href="#in-this-project-i-learned-and-put-into-practice">Learning</a> •
<a href="#according-to-the-project-requirements-designated-by-trybe-i-learned-how-to">Requirements</a> •
<a href="#stacks">Stacks</a> •
<a href="#how-to-run-the-application-locally">How to run the application</a>
</p>
<hr/>
<p align="center">
<a href="#descrição-do-projeto">Descrição do Projeto</a> •
<a href="#nesse-projeto-aprendi-e-coloquei-em-prática">Aprendizado</a> •
<a href="#de-acordo-com-os-requisitos-do-projeto-designados-pela-trybe-aprendi-como">Requisitos</a> •
<a href="#tecnologias-utilizadas">Tecnologias Utilizadas</a> •
<a href="#como-rodar-a-aplicação-localmente">Rodar a Aplicação</a>
</p>
<hr/>

## Project Description
I worked on this project during my learning period at Trybe, where I developed a virtual wallet for expense management, which also includes a currency converter. </br> </br>
It is possible to add, edit, and delete expenses, select the currency, view the table with values converted into Brazilian Real separately, and also see the total amount of expenses converted into Brazilian Real. </br> </br>


## In this project, I learned and put into practice:
- Creating a Redux store in React applications
- Creating reducers in Redux for React applications
- Creating actions in Redux for React applications
- Creating dispatchers in Redux for React applications
- Connecting Redux to React components
- Creating asynchronous actions in your React application that uses Redux.
<hr/>

## According to the project requirements designated by Trybe, I learned how to:
- ✅ Create a login home page with the specified fields and characteristics
- ✅ Create a wallet page with the specified characteristics
- ✅ Create a header for the wallet page with the specified characteristics
- ✅ Implement the logic to store the currency codes coming from the API in the global state
- ✅ Develop a form to add an expense with the specified characteristics
- ✅ Save all form information in the global state
- ✅ Develop a table with expenses and the specified characteristics
- ✅ Implement the logic for the table to be fed by the application state
- ✅ Create a button to delete an expense from the table with the specified characteristics
- ✅ Create a button to edit an expense in the table with the specified characteristics
<hr/>

## Stacks
### FrontEnd: 
- JavaScript
- HTML
- CSS
- React
- Redux
- Docker

<a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/html2.png?raw=true" width="50" height="50" alt="HTML Icon" /></a><a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/CSS2.png?raw=true" width="50" height="50" alt="CSS3 Icon" /></a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/JavaScript2.png?raw=true" width="50" height="50" alt="JavaScript Icon" /></a><a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/React2.png?raw=true" width="50" height="50" alt="React Icon" /></a><a href="https://redux.js.org/" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/Redux2.png?raw=true" width="50" height="50" alt="Redux Icon" /></a><a href="https://www.docker.com/" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/Docker2.png?raw=true" width="50" height="50" alt="Docker Icon" /></a>
<hr/>

## How to run the application locally?
<strong> ⚠️ Read before attempting to run the project locally ⚠️</strong></br>
This project uses Node 16.</br>
Therefore, it is important to switch between the version installed on your machine and the project version using the command `nvm use 16`.</br>

:whale: I recommend running the project via Docker as it is simpler :whale:

- Clone the repository: <br>
`git clone git@github.com:prtpj1/projeto-my-wallet.git`
- Navigate to the project folder: <br>
`cd projeto-trybe-wallet`
- Install the dependencies: <br>
`npm install --legacy-peer-deps`
- Start the application: <br>
`npm start` <br>

#### :whale: Running with Docker
- Check that 🐋<strong>Docker</strong>🐋 is running on your computer:
`systemctl status docker` <em><u>(if yes, you will see the word "active" in green)</u></em>
- Clone the repository: <br>
`git clone git@github.com:prtpj1/projeto-my-wallet.git`
- Navigate to the project folder: <br>
`cd projeto-trybe-wallet`
- Start the container in Docker: <br>
`docker-compose up --build -d`

⚠️ Wait for the application to open in your browser. If it doesn't, enter the following in the address bar of your browser: `http://localhost:3000` ⚠️

## Used API Endpoint
[AwesomeAPI](https://economia.awesomeapi.com.br/json/all)

## Link to View the Project's Website:
[Project Website](https://my-wallet-mu-six.vercel.app/)
</br>
_*NOTE: If you encounter any difficulties with the instructions and would like to provide feedback, feel free to send me a message.*_
<hr/>

## Descrição do Projeto
Fiz este projeto durante meu período de aprendizagem na Trybe onde desenvolvi uma carteira virtual para controle de gastos que também possui um conversor de moedas. </br> </br>
É possivel adicionar, editar e excluir despesas, selecionar a moeda, visualizar na tabela com valores convertidos em reais separadamente e o valor total dos gastos também convertido em Reais. </br> </br>

## Nesse projeto, aprendi e coloquei em prática:
- Criar um store Redux em aplicações React
- Criar reducers no Redux em aplicações React
- Criar actions no Redux em aplicações React
- Criar dispatchers no Redux em aplicações React
- Conectar Redux aos componentes React
- Criar actions assíncronas na sua aplicação React que faz uso de Redux.
<hr/>

## De acordo com os requisitos do projeto designados pela Trybe aprendi como:
- ✅ Criar uma página inicial de login com os seguintes campos e características
- ✅ Criar uma página para sua carteira com as seguintes características
- ✅ Criar um header para a página de carteira contendo as seguintes características
- ✅ Implementar a lógica para armazenar no estado global as siglas das moedas que vêm da API
- ✅ Desenvolver um formulário para adicionar uma despesa contendo as seguintes características
- ✅ Salvar todas as informações do formulário no estado global
- ✅ Desenvolver uma tabela com os gastos contendo as seguintes características
- ✅ Implementar a lógica para que a tabela seja alimentada pelo estado da aplicação
- ✅ Criar um botão para deletar uma despesa da tabela contendo as seguintes características
- ✅ Criar um botão para editar uma despesa da tabela contendo as seguintes características
<hr/>

## Tecnologias Utilizadas 
### FrontEnd: 
- JavaScript
- HTML
- CSS
- React
- Redux
- Docker

<a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/html2.png?raw=true" width="50" height="50" alt="HTML Icon" /></a><a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/CSS2.png?raw=true" width="50" height="50" alt="CSS3 Icon" /></a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/JavaScript2.png?raw=true" width="50" height="50" alt="JavaScript Icon" /></a><a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/React2.png?raw=true" width="50" height="50" alt="React Icon" /></a><a href="https://redux.js.org/" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/Redux2.png?raw=true" width="50" height="50" alt="Redux Icon" /></a><a href="https://www.docker.com/" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/Docker2.png?raw=true" width="50" height="50" alt="Docker Icon" /></a>
<hr/>

## Como rodar a aplicação localmente?
<strong> ⚠️ Leia antes de tentar rodar o projeto localmente ⚠️</strong></br>
Este projeto usa o node 16 </br>
Por isso é importante alternar entre a versão instalada na sua máquina e a versão do projeto através do comando `nvm use 16`</br>

:whale: Recomendo que você opte por rodar o projeto via docker por ser mais simples :whale:</br>

- Clone o repositório: <br>
`git clone git@github.com:prtpj1/projeto-my-wallet.git`
- Acesse a pasta do projeto: <br>
`cd projeto-trybe-wallet`
- Instale as dependências: <br>
`npm install --legacy-peer-deps`
- Inicie a aplicação: <br>
`npm start` <br>

#### :whale: Rodando com Docker
- Confirme que o 🐋<strong>Docker</strong>🐋está rodando no seu computador
`systemctl status docker` <em><u>(se sim, você verá a palavra "active" na cor verde)</u></em>
- Clone o repositório: <br>
`git clone git@github.com:prtpj1/projeto-my-wallet.git`
- Acesse a pasta do projeto: <br>
`cd projeto-trybe-wallet`
- Suba o container para o Docker: <br>
`docker-compose up --build -d`

⚠️Aguarde a aplicação abrir no seu navegador. Caso não ocorra, coloque na barra de endereços do seu navegador: `http://localhost:3000`⚠️

## Endpoint da API utilizada
[AwesomeAPI](https://economia.awesomeapi.com.br/json/all)

## Link para visualizar o site do projeto:
[Site do Projeto](https://my-wallet-mu-six.vercel.app/)
</br>
_*OBS: Se tiver alguma dificuldade com as instruções e quiser dar um feedback me mande uma mensagem*_
