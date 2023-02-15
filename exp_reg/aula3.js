const { texto, arquivos } = require('./base');

// * (opcionais) 0 ou n
// + (obrigatório) 1 ou n
// ? (opcionais) 0 ou 1
// \ Caratere de escape
// {n,m} mínimo 10
// {, 10} de 0 a 10

// console.log(texto);

// const regExp1 = /Jo+ão+/gi

// console.log(texto.match(regExp1));

const regExp2 = /\.(jpg|jpeg)/g
const regExp3 = /\.(jpg?g)/gi

for (const arquivo of arquivos) {
    // console.log(arquivo.match(regExp2))
    console.log(arquivo.match(regExp3))
}