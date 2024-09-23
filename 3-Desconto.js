let produtos = [
    { nome: "Produto 1", preco: 100 },
    { nome: "Produto 2", preco: 150 },
    { nome: "Produto 3", preco: 300 }
  ];
  

  const desconto = produtos.map(produto => {
    return {
      nome: produto.nome,
      preco: produto.preco * 0.9 // 10% de desconto
    };
  });
  
  console.log(desconto);
  