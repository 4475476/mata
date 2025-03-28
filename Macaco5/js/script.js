function Voto() {
    nacio = parseFloat(document.getElementById(`nacio`).textContent)
    id = parseInt(document.getElementById(`id`).value)
    mensagem = ``
    if (id >= 16) {
        mensagem = 'você pode votar'
    } else {
        mensagem = 'nao consegue votar'
    }

    document.getElementById("resposta").innerHTML = mensagem

}
