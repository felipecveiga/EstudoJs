let idade
idade = prompt("Digite sua idade")
if(idade >= 5 && idade <= 7){
    alert("sua categoria é Infantil A ")
}else if(idade >= 8 && idade<= 11){
    alert("sua categoria é Infantil B")
}else if(idade >=12 && idade<= 13){
    alert("sua categoria é juvenil A")
}else if (idade >= 14 && idade<= 17){
    alert("sua categoria é juvenil B")
}else {
    alert("sua categoria é adulto")
}