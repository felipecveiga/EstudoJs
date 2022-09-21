//Criar uma função que converta uma temperatura 
//de Celsius para Fahrenheit

let cel, fahr
cel = prompt("Digite sua temperatura em Celsius");
function temperatura(cel){
    fahr = parseInt ((cel* 9 / 5) + 32)
return alert(fahr)
}
temperatura(cel)
