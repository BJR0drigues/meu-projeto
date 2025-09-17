"use strict";
// Tipos primitivos: number,string,boolean,
Object.defineProperty(exports, "__esModule", { value: true });
//const, let ,var
let nome = "Leprechaun";
let idade = 19;
let adulto = true;
// Arrays
const frutas = [];
frutas.push("Banana");
frutas.push("abacaxi");
// Tuplas
const pessoa = ["Leprechaun", 19];
console.log(frutas);
console.log(pessoa);
// Funcoes
function soma(a, b) {
    return a + b;
}
const cumprimentar = (nome) => {
    return `Ola, ${nome}`;
};
console.log(soma(10, 10));
console.log(cumprimentar("Leprechaun"));
const cumprimentar2 = (nome) => {
    console.log(`Ola, ${nome}`);
};
//# sourceMappingURL=index.js.map