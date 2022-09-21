let num = 0, resultado = 0;

num = prompt("Digite seu numero: ");

do{
    resultado = parseInt(resultado) + parseInt(num)
    num --

}while(num >= 0);

alert (resultado);