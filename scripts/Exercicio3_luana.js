let notas = [8.5, 7.0, 9.5, 6.5, 8.0, 7.5, 5.5, 6.0, 9.0, 10.0];
let mediaDaTurma = 0;
let somaProvas = 0;
let alunosNotasBaixas = 0;
let alunosNotasAltas = 0;
let maiorNota = 0;
let menorNota = 0;

for (let i = 0; i < notas.length; i++) {
  somaProvas += notas[i];
}

mediaDaTurma = somaProvas / notas.length;

for (let i = 0; i < notas.length; i++) {
   if (notas[i] >= mediaDaTurma) {
     alunosNotasAltas += 1;
}
}

maiorNota = notas[0] 
for (let i = 0; i < notas.length; i++) {
    if (notas[i] > maiorNota)
         maiorNota = notas[i];
  }

 menorNota = notas[0] 
  for (let i = 0; i < notas.length; i++) {
      if (notas[i] < menorNota)
         menorNota = notas[i];
    }


console.log("A media da turma é de",mediaDaTurma.toFixed(2));
console.log(`A quantidade de alunos acima da media é ${alunosNotasAltas}`);
console.log(`A maior nota é de ${maiorNota}`);
console.log(`A menor nota é de ${menorNota}`);