
let vetores = [
    ["Olá", "mundo"],
    ["bem-vindo", "ao", "minha pagina"],
    ["espero", "que", "você", "esteja", "bem"]
];

const listaConcatenada = vetorDeVetores.reduce((acc, curr) => acc.concat(curr), []);

console.log(listaConcatenada);
