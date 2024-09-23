
let pessoas = [
    { nome: "Alice", idade: 30 },
    { nome: "Bob", idade: 25 },
    { nome: "Carlos", idade: 35 },
    { nome: "Diana", idade: 28 }
];

const Strings = pessoas.map(pessoa => `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);

console.log(Strings);
