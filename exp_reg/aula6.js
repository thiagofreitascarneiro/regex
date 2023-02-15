const { alfabeto } = require('./base');

// [abc]
console.log(alfabeto);
console.log(alfabeto.match(/[abc123]/g));
console.log(alfabeto.match(/[a-k]+/gi));