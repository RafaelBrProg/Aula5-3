let produtos = [
    { nome: "Produto A", preco: 100 },
    { nome: "Produto B", preco: 200 },
    { nome: "Produto C", preco: 150 }
  ];
  
  const soma = produtos.reduce((total, produto) => {
    return total + produto.preco;
  }, 0);
  
  console.log(`A soma total dos preços é: R$ ${soma}`);
  