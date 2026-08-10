let read = require('readline-sync') //  

const name = read.question('Qual o seu nome? ')

console.log(name)
console.log(`Olá, ${name}`) //interpolação text + var..