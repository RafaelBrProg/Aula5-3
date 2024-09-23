
let produtos = [
    { nome: "Camiseta", preco: 29.99 },
    { nome: "Calça", preco: 49.99 },
    { nome: "Tênis", preco: 89.99 },
    { nome: "Relógio", preco: 199.99 },
    { nome: "Boné", preco: 19.99 }
];

const produtosAgrupados = produtos.reduce((acc, produto) => {
    const chave = produto.preco > 50 ? 'maisDe50' : 'menosOuIgual50';
    acc[chave] = acc[chave] || [];
    acc[chave].push(produto);
    return acc;
}, {});

console.log(produtosAgrupados);
