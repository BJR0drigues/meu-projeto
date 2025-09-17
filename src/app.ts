// Definindo uma string com tipo explícito (este é o TypeScript básico!)
const mensagem: string = "Olá do TypeScript!";

// Pegando referências aos elementos HTML
const botao = document.getElementById('botao') as HTMLButtonElement;
const titulo = document.getElementById('titulo') as HTMLHeadingElement;

// Contador para demonstrar a mudança de estado
let contador: number = 0;

// Adicionando um event listener ao botão
botao.addEventListener('click', () => {
    // Incrementando o contador
    contador++;
    
    // Atualizando o texto do título
    titulo.textContent = `${mensagem} Cliques: ${contador}`;
    
    // Mudando a cor do texto baseado no número de cliques
    if (contador % 2 === 0) {
        titulo.classList.remove('text-green-600');
        titulo.classList.add('text-blue-600');
    } else {
        titulo.classList.remove('text-blue-600');
        titulo.classList.add('text-green-600');
    }
    
    // Mostrando um alerta
    if (contador === 5) {
        alert("Você clicou 5 vezes! Muito bem!");
    }
});

// Mostrando uma mensagem no console
console.log("Script TypeScript carregado!");