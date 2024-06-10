const biblioteca = [];
let livro = {};
let opcao = 0;

console.log("1. Para inserir um livro");
console.log("2. Para remover um livro");
console.log("3. Para visualizar os livros");
process.stdin.on("data", function (data) {
  let entrada_usuario = data.toString().trim();

  if (!opcao) {
    opcao = Number(entrada_usuario);
    console.log("Digite ENTER para continuar");
  } else {
    switch (opcao) {
      case 1:
        if(!livro.nome){
            livro.nome = entrada_usuario;
            console.log("Insira o número de páginas:");
        }else if(!livro.tamanho){
            livro.tamanho = entrada_usuario;
            console.log("Insira o autor:");
        }else if(!livro.autor){
            livro.autor = entrada_usuario;
            console.log("Insira o gênero:");
        }else {
            livro.genero = entrada_usuario;

            biblioteca.push(livro);
            livro = {};
            opcao = 0;

            console.log("Livro inserido com sucesso!");
        }
        break;
      case 2:

        break;
      case 3:
        biblioteca.forEach(livro => {
            console.log(livro);
        });
        opcao = 0;
        break;

      default:
        console.log("Opção inválida");
        opcao = 0;
        break;
    }
  }
});
