let numeros = [12, 5, 8, 21, 16, 7, 30, 45, 13, 27];
let pares =  0;
let impares = 0;
let numerosMaiorQueVinte = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {  
        pares += 1;
    } else {
        impares += 1;
    }
}
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] >= 18) {
        numerosMaiorQueVinte += 1;
    }
}
    
console.log(`A quantidade de numeros pares são ${pares} e a quantidade de numeros impares são ${impares}`);
console.log(`A quantidade de numeros maiores que 20 são ${numerosMaiorQueVinte}`);

