function papelaria() {
    let quantidade = parseInt(prompt("Informe a quantidade de folhas para impressão: "));
    let valor;

    if (quantidade <= 100) {
        valor = quantidade * 0.25;
    } else {
        valor = (100 * 0.25) + ((quantidade - 100) * 0.20);
    }

    document.getElementById("resultado").innerHTML =
        "Valor total: R$ " + valor.toFixed(2);
}