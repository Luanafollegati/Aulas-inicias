let precos = [150, 50, 220, 80, 120, 30, 480, 70, 90, 190];
let contador = 0;
let desconto = [];
let prejuiso = 0;

for (let i = 0; i < precos.length; i++) {
  if (precos [i] > 100) ; {
    desconto [contador] = precos[i] - (precos[i] * 10 / 100);
    contador++;
   }
}

for (let i = 0; i < desconto.length; i++) {
    prejuiso = desconto[i];
    
}


console.table(`os valores com desconto são ${desconto}`);
console.log(`A loja vai perder ${prejuiso} reais com os descontos`);
