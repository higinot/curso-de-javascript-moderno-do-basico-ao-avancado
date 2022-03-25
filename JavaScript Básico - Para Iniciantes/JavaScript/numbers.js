// Transformar um numero em uma string
let num1 = 1 //number

console.log(num1.toString());

//Representação binaria
console.log(num1.toString(2));


//Arredondar um numero
let num2 = 0.502525;

console.log(num2.toFixed(1));

//Saber se o numero é um inteiro
console.log(Number.isInteger(num2)); //retorno boleano True or false
console.log(Number.isInteger(num1));  

//Saber se a conta é invalída
let temp1 = 'Olá' * num1
let temp2 = 1 + 2

console.log(Number.isNaN(temp2));
console.log(Number.isNaN(temp1));

// Sinal de atribuição +=

num1 += num2
num1 += num2
num1 += num2
num1 += num2

console.log(num1);
console.log(Number.isInteger(num1));

//Deixar o valor como inteiro
num1 = Number(num1.toFixed())

console.log(num1);
console.log(Number.isInteger(num1));




