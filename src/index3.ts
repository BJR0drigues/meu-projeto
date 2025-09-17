class User{
    public nome: string;
    public age: number;
    private saldBancario: number;
    constructor(nome: string, age: number){
        this.nome = nome;
        this.age = age;
        this.saldBancario = 0;
    }
    soma(){
        this.saldBancario
        this.validaSaldo(this.saldBancario);
        
    }
    private validaSaldo(saldo: number){

    }
}

const usuario = new User("Leprechaun", 19);

