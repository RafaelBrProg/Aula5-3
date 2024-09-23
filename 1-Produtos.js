let produtos = [
    { nome: "Produto 1", preco: 80, categoria: "Eletrônicos" },
    { nome: "Produto 2", preco: 150, categoria: "Celulares  " },
    { nome: "Produto 3", preco: 120, categoria: "Moveis" },
    { nome: "Produto 4", preco: 60, categoria: "Alimentos" },
    { nome: "Produto 5", preco: 200, categoria: "Computadores" }
  ];
  
  // filter é usado para filtrar informaçoes escolhidas
  let produtosCaros = produtos.filter(produto => produto.preco > 100);
  
  console.log(produtosCaros);
  