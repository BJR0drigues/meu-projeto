// Tipos primitivos: number,string,boolean,

//const, let ,var
let nome: string = "Leprechaun";
let idade: number = 19;
let adulto: boolean = true;

// Arrays
const frutas: string[] = [];
frutas.push("Banana");
frutas.push("abacaxi");

// Tuplas
const pessoa: [string, number] = ["Leprechaun", 19];

console.log(frutas);
console.log(pessoa);

// Funcoes
function soma(a: number, b:number): number {
    return a + b;
}
const cumprimentar = (nome: string): string=> {
    return `Ola, ${nome}`;
}

console.log(soma(10,10));
console.log(cumprimentar("Leprechaun"));

const cumprimentar2 = (nome: string): void=> {
    console.log(`Ola, ${nome}`);
}