function desconto()
{
    let nomeproduto = prompt("Informe o nome do produto: ")
    let valorproduto = parseInt(prompt("Informe o valor do produto: "))
    let desconto = valorproduto * 0.90

    document.getElementById("resultado").innerText=`Produto Adquirido: ${nomeproduto}\nPreço Original: R$ ${valorproduto}\nParabens! Você ganhou 10% de desconto!\nValor com o desconto aplicado: R$ ${desconto}`

}