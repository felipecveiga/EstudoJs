let peso, excesso, multa, limite = 50
peso = prompt("Digite o peso")
excesso = peso - limite
multa = excesso*4.0
if(peso >= 50){
    alert("você excedeu: "+ excesso + " Kg" + "\nVocê foi multado em : " + multa + " Reais");
}else {
    alert("O Seu peso está dentro do padrão");
}



