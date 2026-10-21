function menos() 
{

    let vetor = []
    let i
    let menor

    for (i = 0; i <= 2; i++){
        vetor[i] = parseInt(prompt("Informe o " + (i + 1) + " numero: "))
    }       
    menor = vetor[0]

    for (i = 0; i <= 2 ; i++){
        if (vetor[i] < menor){
            menor = vetor[i]
        }
    }
    document.getElementById("resultado").innerHTML = "O menor numero é: " + menor
}