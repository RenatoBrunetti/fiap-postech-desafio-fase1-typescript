# FIAP / PÓS TECH - Desafio Fase 01 - TypeScript

Desafio de Projeto: Sistema de Gerenciamento de Bibilioteca

`*NÃO VALE NOTA. Esta é uma atividade individual. Ela não vale pontos e tem como objetivo fixar os conteúdos desenvolvidos durante a disciplina.`

## Objetivo

Desenvolver um sistema de gerenciamento de biblioteca utilizando a última versão do TypeScript. O foco será criar um CRUD (Create, Read, Update, Delete), que se conecta a um banco de dados, podendo ser NoSQL ou SQL.

## Requisitos Funcionais

Gerenciamento de livros: o objetivo do seu sistema será disponibilizar uma API que tenha as funcionalidades de um CRUD para que uma aplicação Front-end possa gerenciar estes dados.

Estrutura proposta para entidade Livro: cada livro pode possuir um título, autor(a), ISBN, ano de publicação e, caso queira se aventurar, pode adicionar uma Entidade Editora, assim um livro pode fazer parte de uma Editora e uma Editora pode ter uma lista de livros

## Requisitos Técnicos

Desenvolvimento do projeto utilizando a versão mais recente do TypeScript para garantir que o seu código esteja atualizado. Integração do sistema a um banco de dados que pode ser um NoSQL ou SQL. Neste cenário, você pode utilizar o Docker ou um banco de dados grátis como o PostgreSQL na plataforma Supabase.

<br>
<hr>
<hr>

## Docker Database

### Make Commands

- Run all containers<br>
  `make build`

- Stop all containers<br>
  `make down`

- Run individual container<br>
  `make up container=container_name`

- Stop individual container<br>
  `make down container=container_name`

- Add network<br>
  `make add-network`

- Remove network<br>
  `make remove-network`

### Docker Commands

- Check network<br>
  `docker network ls`

- Remove network<br>
  `docker network rm <network_name>`

- List containers<br>
  `docker ps -a`<br>
  or `docker container ls`

- List containers by PORT<br>
  `docker ps --filter publish=<PORT>`

- List containers by Network<br>
  `docker ps --filter network=<network_name>`
