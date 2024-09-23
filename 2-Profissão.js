let pessoas = [
    { nome: "Alice", idade: 30, profissao: "Engenheiro" },
    { nome: "Bob", idade: 25, profissao: "Designer" },
    { nome: "Carlos", idade: 35, profissao: "Professor" },
    { nome: "Diana", idade: 28, profissao: "Médico" }
  ];
  

  const somaIdades = pessoas.reduce((soma, pessoa) => soma + pessoa.idade, 0);
  const mediaIdade = somaIdades / pessoas.length;
  
  console.log(`A média de idade é: ${mediaIdade}`);