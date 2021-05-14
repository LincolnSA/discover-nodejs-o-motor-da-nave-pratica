/**
 *  Crie 2 arquivos js
 *  O primeiro, irá exportar uma função chamada getFlag()
 *  que receberá um argumento do tipo string
 *  Essa função deverá buscar dentro do array process.argv a flag desejada,
 *  que é uma string e retornar o valor da flag
 *
 *  O segundo irá importar a função e passar a flag dessejada.
 *
 *  iremos rodar no terminal o segundo arquivo passando as flags --name e --greeting
 *  para que seja impresso no terminal a saudação e o nome da pessoa
 */

const getFlag = require('./fetchFlags')

const flags = "--greeting --name"

console.log(getFlag(flags))