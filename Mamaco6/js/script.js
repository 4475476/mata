function M_CM() {
    M = parseFloat(document.getElementById(`M`).value)
    mC = M / 100
    pos = `${mC} centimetos`
    document.getElementById("resposta").innerHTML = pos
}
function KM_CM() {
    kM = parseFloat(document.getElementById(`Km`).value)
    kC = kM / 100000
    mensagem = `${kC} centimetros`
    document.getElementById("ras").innerHTML = mensagem
}
function KM_M() {
    KM = parseFloat(document.getElementById(`Km`).value)
    kM = KM / 1000
    ros = `${kM} metros`
    document.getElementById("rosp").innerHTML = ros
}
