
let pessoas = [
    { nome: "Alice", idade: 30 },
    { nome: "Bob", idade: 25 },
    { nome: "Carlos", idade: 35 },
    { nome: "Diana", idade: 28 }
];

const maisVelho = pessoas.reduce((maisVelho, atual) => {
    return (atual.idade > maisVelho.idade) ? atual : maisVelho;
});

console.log(maisVelho);
