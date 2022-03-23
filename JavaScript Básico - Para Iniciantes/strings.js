let umaString = "Um Texto 1 13";

//Concatenção
console.log(umaString.concat(' Hello'));
console.log(`${umaString} Hello`);

//IndexOf
console.log(umaString.indexOf('o')); //começa de frente para trás
console.log(umaString.lastIndexOf('U')); //começa de trás pra frente

//match
console.log(umaString.match(/[a-z]/g)); //flag 'g' faz a divisão

//replace
console.log(umaString.replace(/1/g, 'outra')); //muda 1/g (todos) por outra

//length
console.log(umaString.length); //Tamanho da string

//slice
console.log(umaString.slice(-3)); //- Do final até o começo
console.log(umaString.slice(4)); //+ Do começo até o final

//split
console.log(umaString.split(' ')); //+ Divide a string em um array separando por ' '

//toUpperCase()
console.log(umaString.toUpperCase()); //+ Deixa o texto MAIUSCULO

//toLowerCase()
console.log(umaString.toLowerCase()); //+ Deixa o texto minusculo


