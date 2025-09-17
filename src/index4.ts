class Pessoa{
    nome: string;
    idade: number;
    constructor(){
        this.nome = "Leprechaun";
        this.idade = 19;
    }
    cumprimentar(nome:string):void{
        console.log(`ola ${nome}`);
    }
}
interface Teste{
    salario: number;
    comer(): void;
}

class Usuario extends Pessoa implements Teste{
    salario: number;
    constructor(){
        super();
        this.salario = 0;
    }
    comer():void{
        console.log("comendo");
    }
}

const user = new Usuario();
