const { html } = require('./base');

console.log(html.match(/<.+>.+<\/.+>/)); // greedy
console.log(html.match(/<.+?>.+?<\/.+?>/g)); // non-greedy