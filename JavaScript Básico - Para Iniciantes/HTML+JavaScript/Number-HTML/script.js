//Colocar Number na frente para converter de string para Number
const numero = Number(prompt('Digite seu numero: '));

//Selecionando o elemento com id 'numero-titulo'
const numeroTitulo = document.getElementById('numero-titulo');

//Selecionando o elemento com id 'texto'
const titulo = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
titulo.innerHTML = `<p>Seu numero + 2 é ${numero + 2}</p>`


//Precisamos colocar o += para agregar e não substituir
titulo.innerHTML += `<p>Raiz quadrada do número é ${numero ** 0.5}.</p>`
titulo.innerHTML += `<p>${numero} é inteiro ${Number.isInteger(numero)}.</p>`
titulo.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}.</p>`
titulo.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}.</p>`




