//Utilizando o objeto Math

let num1 = 9.45324321;

//Arredondar o valor para baixo
let num2 = Math.floor(num1);
console.log(num2);

//Arredondar o valor para cima
let num3 = Math.ceil(num1);
console.log(num3);

//Arredpmdar para o número mais pŕoximo
let num4 = Math.round(num1);
console.log(num4);

//Achar o maior número da sequencia
let nums = [2, 3, 4, 5, 6, 7, 1, 32, 412, 523421, 1, 2, 3214];
console.log(Math.max(...nums));

//Achar o menor número da sequencia
console.log(Math.min(...nums));

//Gerar um número aleatorio Math.random() * (Maior - menor) + menor;
const aleatorio = Math.random()*( 10-5) + 5;
console.log(aleatorio);

//Pegar raiz quadrada de um numero
let num5 = 9;
console.log(num5 ** 0.5);



