//Elaborar um programa que efetue a leitura sucessiva de valores numéricos e
//apresente no final o total do somatório, a média e o total de valores lidos. 
//O programa deve fazer as leituras dos valores enquanto o usuário estiver 
//fornecendo valores positivos. Ou seja, o programa deve parar quando o usuário 
//fornecer um valor negativo.

let numero = 0, media, soma = 0, totalLido = 0;

while(numero > 0){
    numero = prompt("Digite um numero");
    soma = parseInt(soma) + parseInt(numero)
    totalLido = parseInt (totalLido)+ parseInt(1)
    }if (numero < 0){
    soma = soma - numero
    totalLido = totalLido - 1
    media = soma/totalLido
    alert(media + soma + totalLido)
}
