// declara a função mostrarOla;

function mostrarOla ()  {
    // obtem o conteúdo do campo (com id=nome)
    var nome = document.getElementById("nome").value;
    // exibe no paragrafo (resposta) Olé e o nome informado
    document.getElementById("resposta").textContent = "Olá " + nome;

    }
    //cria uma ref ao botaõ (com id= mostrar)
    var mostrar = document.getElementById("mostrar");
    //registra para o botão "mostrar" um ouvinte para o evento click;
    // que ao ser clicado ira chamar a função mostraOla;
    mostrar.addEventListener("click",mostrarOla);