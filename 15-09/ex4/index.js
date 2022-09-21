//Crie uma um programa de saúde, nesse programa desenvolva uma função que 
//calcula o imc  de pacientes, a função deverá receber os  seguintes parâmetros, 
//peso e altura.

let peso, altura, imc
peso = prompt("Qual seu peso");
altura = prompt("Qual sua altura");
function x(peso,altura){
    imc = peso/altura**2; 
    return alert("O seu IMC é: " + imc.toFixed(2));
}
x(peso,altura);