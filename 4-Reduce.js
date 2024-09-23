let produtos = [
    { nome: "Produto 1", preco: 100, categoria: "Eletrônicos" },
    { nome: "Produto 2", preco: 200, categoria: "Celulares" },
    { nome: "Produto 3", preco: 100, categoria: "Alimentos" },
    { nome: "Produto 4", preco: 300, categoria: "Computadores" },
    { nome: "Produto 5", preco: 120, categoria: "Moveis" }
  ];
  

  const contagemCategorias = produtos.reduce((contador, produto) => {
    const categoria = produto.categoria;
    contador[categoria] = (contador[categoria] || 0) + 1; 
    return contador;
  }, {});
  
  console.log(contagemCategorias);