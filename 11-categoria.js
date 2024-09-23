let produtos = [
    { nome: "Camiseta", preco: 29.99, categoria: "Vestuário" },
    { nome: "Calça", preco: 49.99, categoria: "Vestuário" },
    { nome: "Tênis", preco: 89.99, categoria: "Calçados" },
    { nome: "Relógio", preco: 199.99, categoria: "Acessórios" },
    { nome: "Boné", preco: 19.99, categoria: "Acessórios" }
];


const filtrarCategoria = (produtos, categoria) => {
    return produtos.filter(produto => produto.categoria === categoria);
};

// Usando a função para filtrar produtos da categoria "Acessórios"
const acessorios = filtrarCategoria(produtos, "Acessórios");

// Exibindo os produtos filtrados
console.log(acessorios);
