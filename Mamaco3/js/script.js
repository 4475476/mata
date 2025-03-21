function calcularSalario() {
    imposto = 0;
    salarioLiquido = 0;
    vh = parseFloat(document.getElementById('vh').value);
    qh = parseFloat(document.getElementById('qh').value);
    salarioBruto = vh * qh;
    if (salarioBruto <= 1500) {
        imposto = 0;
    } else if (salarioBruto < 3000) {
        imposto = salarioBruto * 0.1;
    } else if (salarioBruto <= 5000) {
        imposto = salarioBruto * 0.15;
    } else if (salarioBrutoM <= 10000) {
        imposto = salarioBruto * 0.22;
    } else {
        imposto = salarioBruto * 0.27
    }
    salarioLiquido = salarioBruto - imposto;
    document.getElementById('resposta').innerHTML =
        `Salário Bruto: R$${salarioBruto}<br>Imposto: R$${imposto}<br>
    Salário Liquido: R$${salarioLiquido}`;
}