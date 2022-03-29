// Criar uma função para dar saudação
function saudacao (nome) {
    console.log(`Bom dia! ${nome}`);
}

saudacao('Luis');

// Função anonima
const raizAnonimoFuctiom = function (n) {
    return n ** 0.5;
};

// Arrow function
const raizArrowFunctiom = (n) => n ** 0.5;

console.log(raizArrowFunctiom(9))

console.log(raizAnonimoFuctiom(9))