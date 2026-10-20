function troco()
{
    let nome = prompt("Informe o nome do produto: ")

    let valorproduto = parseFloat(prompt("Informe o preço do produto: "))
    
    let valorpago = parseFloat(prompt("Informe o valor pago: "))

    let trocos =  valorpago - valorproduto 

    
    document.getElementById("resultado").innerText  =`Produto escolhido: ${nome}\n O Produto custa R$ ${valorproduto}, Voce pagou R$ ${valorpago}, e recebera R$ ${trocos} de troco `
    
}