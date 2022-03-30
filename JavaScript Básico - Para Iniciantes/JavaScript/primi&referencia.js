// Primitivos são valores imutavéis
/* string, number, boolean, undefined, null  -> Valores são copiados e vão para espaços diferentes na memoria*/

// string
let a = 'Pedro'
let b = a; //Valor foi definido igual a a;

// Valor alterado em a
a = 'Felipe'

console.log(a); //Felipe
console.log(b); //Pedro

// Referencia são valores mutaveis
// array, objetos, funcões

const aa = ['Pedro']
const bb = aa;

// Valor alterado em aa
aa.push('Higino')

// bb copio o comando que foi definido para aa
console.log(aa); // ['Pedro', 'Higino']
console.log(bb); // ['Pedro', 'Higino']

// Para copiar um valor deve usar ...aa (spread operator)
const cc = [...aa];

aa.pop(); //Removendo o ultimo elemento de aa

// Nesse caso cc não foi alterado
console.log(aa); //['Pedro']
console.log(cc); //['Pedro', 'Higino']
  

