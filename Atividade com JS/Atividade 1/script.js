function atividade1()
{
    let litros = parseInt(prompt("Informe a quantidade de Garrafas de 2 litros: "))
    let garrafa = parseInt(prompt("Informe a quantidade de Garrafas de 600ml: "))
    let latinha = parseInt(prompt("Informe a quatidade de Latas de 350ml: "))
    let total = latinha * 0.35 + garrafa * 0.60 + litros * 2.0

    document.getElementById("resultado").innerText= `O total consumido foi ${total} L`
    
    
}