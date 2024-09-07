function criarLivro(titulo, autor, anoPublicacao, preço){
    return {
        titulo: titulo,
        autor: autor,
        anoPublicacao: anoPublicacao,
        preço: preço,

        detalhes: function(){
            console.log('\ntitulo:' + this.titulo + ',autor:' + this.autor + ', anoPublicacao:' + this.anoPublicacao + ', preço: R$' + this.preço)
        }
    }
}

function verificarDesconto(livro){
    const anoAtual = 2024;
    if (anoAtual - livro.anoPublicacao > 10){
        livro.preço *= 0.8;
        console.log('\nO livro:' + livro.titulo +' ' + livro.anoPublicacao +' Tem direito ao desconto ' + livro.preço.toFixed(2));

    } else {
        console.log('\nO livro:' + livro.titulo +' ' + livro.anoPublicacao +' Não tem direito ao desconto')
    }
}

let livro1 = criarLivro('Clean Code', 'Robert C. Martin', 2008, 59.90);
let livro2 = criarLivro('O ladrão de raios', 'Rick Riordan', 2011, 25.00);

livro1.detalhes();
livro2.detalhes();

verificarDesconto(livro1);
 verificarDesconto(livro2);