function verificarVotacao() {
    idade = parseFloat(document.getElementById("idade").value);
    brasileiro = parseFloat(document.getElementById("brasileiro").value);
    mensagem = "";

    if (idade >= 16) {
        if (brasileiro >= 1) {
            mensagem = "Pode votar";
        } else {
            mensagem = "Não pode votar";
        }
    } else {
        mensagem = "Não pode votar";
    }

    document.getElementById("resultadoVotacao").innerHTML = mensagem;
}