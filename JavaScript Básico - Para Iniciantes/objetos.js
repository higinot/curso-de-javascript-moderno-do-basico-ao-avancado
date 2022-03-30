// Objeto simples
pessoa1 = {
    name: 'Higino',
    idade: 26,
    Signo: 'Aquario',
}

// Acessar um dado no objeto
console.log(pessoa1.name);

//Objeto de Objetos
dados = {
    dado1: {
        name:'Higino',
        idade: 26,
        signo: 'Aquario'
    },
    dado2: {
        name: 'Jade',
        idade: 25,
        signo: 'touro'
    }
}

//Acessar um dado em um objeto de objeto
console.log(dados.dado1.name);

//Usar um método dentro de um objeto
getDados = {
    get (nome, idade, signo) {
        getdados: {
        nome,
        idade,
        signo
        }

        return `Seu nome é ${nome}, você tem ${idade} e seu signo é ${signo}`;
    }
}

//Acessar o método dentro do objeto
console.log(getDados.get('Higino', 26, 'Aquario'));

