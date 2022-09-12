let indice
indice = prompt("Digite o indice de poluição")
if (indice >= 0.05 && indice <= 0.25){
    alert("Seu indice está aceitavel")
}else if( indice >= 0.3 && indice < 0.4){
    alert("as indústrias do 1º grupo são intimadas a suspenderem suas atividades")
}else if(indice >=0.4 && indice < 0.5){
   alert("as indústrias do 1º e 2º grupo são intimadas a suspenderem suas atividades")
}else {
    if(indice > 0.5){
        alert("todos os grupos devem ser notificados a paralisarem suas atividades.")
    }
}
    