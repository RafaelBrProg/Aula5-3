let alunos = [
    { nome: "Ana", nota: 10.0 },
    { nome: "João", nota: 6.0 },
    { nome: "Pedro", nota: 9.0 },
    { nome: "Maria", nota: 5.0 },
    { nome: "Lucas", nota: 2.0 }
  ];
  
  // Filtrando alunos aprovados (nota > 7)
  const aprovados = alunos.filter(aluno => aluno.nota > 7);
  
  console.log(aprovados);
  