function valorabsoluto()
{
    let numero = parseInt(prompt("Informe o numero: "))

    let resultado = Math.abs(numero)

    document.getElementById("resultado").innerText=`Numero Inserido: ${numero}\nNumero Absoluto: ${resultado}`





}
