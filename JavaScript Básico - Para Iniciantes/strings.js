let texto = "Um texto";

//length retorna o tamanho da string
console.log(texto.length);

//typeOf retorna o tipo da variavel
console.log(typeof texto);

//string[0] strings são arraz concatenados, com [0] podemos retonrar a posição 0
console.log(texto[0]);

//Melhor forma para concatenar variavél e com template strings
console.log(`Minha string é "${texto}"`);

//indexOf retorna o index Do COMEÇO para o FIM
console.log(texto.indexOf('U'));

//lastIndexOf retorna o index da letra do FIM para o COMEÇO
console.log(texto.lastIndexOf('U'));

//search retorna o index onde foi encontrado
console.log(texto.search('o'));

//replace substitui uma posição da palavra
console.log(texto.replace('t', "#"));

//replace com flag g substitui todas as posições da palavra
console.log(texto.replace(/t/g, "#"));

//slice(COMEÇO DO CORTE, FINAL DO CORTE) utiliza para fatiar uma string
console.log(texto.slice(3));

//split(ONDE DIVIDIR) para dividir a string
console.log(texto.split(' '));

//toUpperCase()
console.log(texto.toUpperCase()); //+ Deixa o texto MAIUSCULO

//toLowerCase()
console.log(texto.toLowerCase()); //+ Deixa o texto minusculo


