// g - global (encontra todas as ocorrências)
// i - insensitive 
// () grupos
// | ou

const { texto } = require('./base');

const regExp1 = /Teve 5 filhos/i;

console.log(regExp1.exec(texto).index)
