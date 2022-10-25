# Car Shop Project

# Contexto

Este projeto propunha o desenvolvimento de uma API restful para uma concessionária de veículos e deveria ser feita em paradigma orientado a objetos,  respeitando os princípios SOLID.

> Utilização do paradigma de programação orientada a objetos (POO) com o uso do TypeScript;

> Respeito aos princípios SOLID;

> Desenvolvimento da aplicação back-end utilizando o conceito de camadas de models, services e controllers;

> Desenvolvimento de testes unitários para as rotas criadas.

## Tecnologias usadas

> Desenvolvido usando: TypeScript, Zod, MongoDB, Mongoose e Mocha/Chai

## Instalando dependências
```
npm install
```

## Executando aplicação
```
npm run dev
```

## Rotas disponíveis
As rotas ficarão disponíveis, por padrão, em localhost:3001 e são as seguintes:

```
→ POST '/cars': para a inclusão de novos carros no BD (deverá ser passado um objeto 
no body da requisição com os campos conforme solicitados pela aplicação);
→ GET '/cars': retorna todos os carros cadastrados;
→ GET '/cars/:id': retorna apenas o carro indicado pelo id;
→ PUT '/cars/:id': edita o carro indicado pelo id;
→ DELETE '/cars/:id': exclui o carro indicado pelo id;

→ POST '/motorcycles': para a inclusão de novas motos no BD (deverá ser passado um objeto 
no body da requisição com os campos conforme solicitados pela aplicação);
→ GET '/motorcycles': retorna todas as motos cadastradas;
→ GET '/motorcycles/:id': retorna apenas a moto indicada pelo id;
→ PUT '/motorcycles/:id': edita a moto indicada pelo id;
→ DELETE '/motorcycles/:id': exclui a moto indicada pelo id;
```
