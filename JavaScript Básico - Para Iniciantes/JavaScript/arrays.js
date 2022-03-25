const alunos = ['Higino', 'Maria', 'Jade'];

//Adicionando uma posição no final do array
alunos[alunos.length] = 'Guilherme';
alunos[alunos.length] = 'João';
alunos

//Adicionando uma posição no fim do array com PUSH
alunos.push('Pedro')
alunos

//Adicionando um elemento no COMEÇO do ARRAY com UNSHIFT
alunos.unshift('Primeiro')
alunos

//Removendo um elemento do FINAL do ARRAY com POP
alunos.pop()
alunos

//Saber quem foi apagado criando a função dentro de uma variavel
const removido = alunos.pop()
removido
alunos

//Removendo um elemento do COMEÇO do ARRAY com shift
alunos.shift()
alunos

//Fatiando um array com SLICE
const alunosHalf = alunos.slice(0,2) //COMEÇA NA POSIÇÃo 0 e FATIA NA POSIÇÃO 3
alunosHalf
//Verificar se o elemento é um ARRAY
console.log(typeof alunos)

//Verificar de forma booleano se é ARRAY
console.log(alunos instanceof Array)



