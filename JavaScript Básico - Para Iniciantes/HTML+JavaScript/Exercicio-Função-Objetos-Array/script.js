
const form = document.querySelector('.form');
const resultado = document.querySelector('.resultados')

function recebendoEventoForm (evento) {

    const pessoas = [];

    const nome = form.querySelector('.nome')
    const sobrenome = form.querySelector('.sobrenome')
    const peso = form.querySelector('.peso')
    const altura = form.querySelector('.altura')

    pessoas.push({
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value
    })

    return pessoas; //Retorna um array que pode ser manipulado
}

function criandoInfo (evento) {
    evento.preventDefault();

    const valores = recebendoEventoForm(); //valores agora recebe o array
    const {nome, sobrenome, peso, altura} = valores[0]; //array destruturing na posição [0]

    const p = document.createElement('p');
    p.innerText = `Seu nome é ${nome} ${sobrenome}, você pesa ${peso} e mede ${altura}`;

    return resultado.appendChild(p);

}

function criandoInfo2 (evento) {
    evento.preventDefault();

    const valores = recebendoEventoForm(); //valores agora recebe o array
    const {nome, sobrenome, peso, altura} = valores[0]; //array destruturing na posição [0]

    return resultado.innerHTML += `<p>Seu nome é ${nome} ${sobrenome}, você pesa ${peso} e mede ${altura}</p>`

}

form.addEventListener('submit', recebendoEventoForm);
form.addEventListener('submit', criandoInfo2);

