function definircategoria() {
    let idade = parseFloat(document.getElementById("idade").value);
    mensagem = ``
    if (idade <= 7) {
        mensagem = 'mirim';
    } else if (idade <= 10) {
        mensagem = 'infantil';
    } else if (idade <= 13) {
        mensagem = 'juvenil A';
    } else if (idade <= 17) {
        mensagem = 'juvenil B';
    } else {
        mensagem = 'adulto';
    }
 
    document.getElementById("resposta").innerHTML = mensagem
}