## 📑 Apresentação:
Este projeto foi desenvolvido por alunos da Unifeso como ferramenta de avaliação da disciplina MVP Back-End Development do Curso de Tecnólogo em Análise e Desenvolvimento de Sistemas.

Nele foi utilizado o conceito de MVP (Menor Produto Viável) onde o foco é a solução prática para desenvolvimento com rapidez e baixo custo. 


## 👨‍💻 Integrantes da Equipe:
  Bruno Nunes      -   Mat. 06007464 <br>
  Murilo Torres    -   Mat. 06007772 <br>
  Thiago Andrade   -   Mat. 06007617 <br>
  Thiago Pereira   -   Mat. 06007579 <br>
  Vinícius Nunes   -   Mat. 06007628 <br>

## 🤖 Técnologias utilizadas:
* [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) - Linguagem base para a lógica do sistema e interações do usuário, facilitando uma experiência ágil e dinâmica
* [Node.JS](https://nodejs.org/pt) - Backbone da aplicação, permitindo que o sistema funcione de forma rápida e escalável. Dá suporte para operações em tempo real.
* [MongoDB](https://www.mongodb.com/pt-br) - Base de dados flexível e robusta para armazenar e organizar os dados, ideal para projetos que requerem grande velocidade de leitura e escrita.
* [Insomnia](https://insomnia.rest/download) Ferramenta de testes para garantir a funcionalidade de cada endpoint da API, simulando requisições de maneira prática e rápida.


## 🚀 Metodologias Ágeis aplicadas:
    
  Realizamos o levantamento dos Requisitos Funcionais e Não Funcionais com base nos requerimentos descritos pela instituição no enunciado do desafio e  nos Requisitos já levantados para o Front-End. Este levantamento está disponível no documento [REQUISITOS](REQUISITOS.xlsx).

  Fizemos Sprints de reuniões semanais através do Método Scrum e uso da ferramenta Trelo para organizar e acompanhar as tarefas realizadas, aguandando e com dificuldade.

    
## ⚠️ Situação Problema (MVP DEFINIDO):
  Desenvolver uma solução simplificada para o processo de agendamento do NAF (Núcleo de Apoio Fiscal), setor da Unifeso que oferece assistência à população para declarações de Imposto de Renda e demais serviços.


## 🎯 Objetivos e Benefícios do Produto:

  A solução deve possuir login para usuários e administradores. Os Usuário agendam o atendimento com base nas datas disponibilizadas pelos administradores(funcionários do NAF) e emitem um protocolo de confirmação. No ato do atendimento os administradores confirmam ou cancelam atendimento no sistema. Podendo também, o usuário deixar um comentário sobre a experiencia do serviço prestado.

  Com esta ferramenta, intituição e comunidade terão facilidade no agendamento e gerenciamento dos atendimentos. Evitando filas no agendamento presencial.

## 👥 Público-Alvo da Solução:

  Cidadão, maior de idade, que deseje atendimento há algum serviço prestado pelo NAF.

## 🆘 Dores do público-alvo:
  Dificuldade no agendamento presencial, excesso de filas.


## 💡 Prototipação:
A estrutura do Bando de Dados segue no formato NoSQL, representado no diagrama abaixo:
<p align="center">
  <img alt="Tabelas do Banco de Dados" src="./tabelas_bd.jpeg" width="50%">
</p>

## 🔚 Endpoints:
  As operações CRUDs já estabelecidas podem ser conferidas [clicando aqui](https://documenter.getpostman.com/view/39755506/2sAY55be8V)

## 👨‍🏫 Instruções de Uso:

Entre no diretório do projeto

```bash
  cd MVP-BACK
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm start
```
