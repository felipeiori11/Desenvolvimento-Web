function numerodigitado()
{
    let numero = parseInt(prompt("Informe o numero: "))
    if ( numero >= 20 && numero < 90){
        document.getElementById("resultado").innerText=`Numero Digitado: ${numero}\nEstá entre 20 e 90!`
    }
    else{
        document.getElementById("resultado").innerText=`Numero Digitado: ${numero}\nO numero digitado nao esta entre 20 e 90!`
    }


}