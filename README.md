# Validador de Cartão de Crédito v.1.0.0

**Esta biblioteca se destina à validação de números de cartão de crédito.**
Na versão atual é receber o valor de um cartão de crédito e informar se o mesmo é válido ou não.

## Como instalar:

```shell

$  npm install cardveridiem

```

## Como utilizar:

```node

> const cardValidator = require("cardveridiem");
> console.log(cardValidator (4556786193856337))
> // returns "true"

```

## roadmap oficial do projeto

#### versão 2.0.0 (sem previsão, aceita-se contribuições)
- implementação: verificar qual a bandeira do cartão;
- README translated to english;

#### versão 1.0.0 (released)
- funcionalidades: verificar se um número de cartão de crédito é verdadeiro ou falso.
