function Ma() {
    massa = 0;
    salarioLiquido = 0;
    Qp = parseFloat(document.getElementById('Qp').value);
    Qa = parseFloat(document.getElementById('Qa').value);
    IMC = Qp / (Qa * Qa);
    if (IMC <= 18.5) {
        alert = (`você esta abaixo do peso`)
    } else if (IMC <= 24.9) {

    } else if (IMC <= 29.9) {

    } else if (IMC <= 34.9) {

    } else if (IMC <= 39.9) {

    } else {

    }
}
