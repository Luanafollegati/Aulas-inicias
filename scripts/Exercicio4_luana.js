let celsius = [0, 10, 20, 30, 40]
let fahrenheit = [];
let contador = 0;

for (let i = 0; i < celsius.length; i++) {
    fahrenheit[contador] = celsius[i] * 9/5 + 32;
    contador++;
}
 
console.log("As temperaturas em Celsius:");
console.table(celsius);
console.log("As temperaturas em fahrenheint:");
console.table(fahrenheit);