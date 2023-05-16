function calcular() {
    const altura = document.getElementById("input-altura").value;
    const peso = document.getElementById("input-peso").value;
    const cla = document.getElementById("classificacao");
    const imc = peso / altura ** 2;

    if (altura == '' || peso == '') {
        cla.innerText = 'Preencha todos os campos'
    } else if (imc < 18.5) {
        cla.innerText = imc.toFixed(2) + ': Abaixo do peso';
    } else if (imc < 25) {
        cla.innerText = imc.toFixed(2) + ': Peso normal';
    } else if (imc < 30) {
        cla.innerText = imc.toFixed(2) + ': Acima do peso';
    } else if (imc < 35) {
        cla.innerText = imc.toFixed(2) + ': Sobrepeso';
    } else if (imc < 41) {
        cla.innerText = imc.toFixed(2) + ': Obesidade';
    } else {
        cla.innerText = imc.toFixed(2) + ': Obesidade severa/mórbida';
    }

}