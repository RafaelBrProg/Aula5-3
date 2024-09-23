let nomes = ["Ana", "João", "Pedro"];


const objeto = nomes.reduce((acc, nome) => {
  acc[nome] = nome.length; 
  return acc;
}, {});

console.log(objeto);