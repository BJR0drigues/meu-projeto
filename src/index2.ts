interface User{
    nome: string;
    idade: number;
    maior: boolean;
    estado: "solteiro"|"casado"|"divorciado";
}
let usuario: User
usuario = {
    nome: "Leprechaun",
    idade: 19,
    maior: true,
    estado: "solteiro"
};

const printUser = (user: User): void=> {
    console.log(user.nome);
    console.log(user.idade);
    console.log(user.maior);
}

printUser(usuario);


