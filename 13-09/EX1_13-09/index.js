let mediaS, mediaF, maiorS = 0, S100 = 0, sal = 0, y, z, filhos = 0
for(x = 1; x <= 20; x++){
    y = prompt("Quanto você ganha")
    z = prompt("Quantos filhos você tem")
    sal = sal + parseFloat(y);
    if(maiorS < y){
        maiorS = parseFloat(y);
    }if(y > 100){
        S100 += 1;
      
    }
    mediaS = sal / 20;
    filhos = filhos + parseInt(z);
    mediaF = filhos / 20;
    //

}alert("A média salarial é de " + mediaS + " Reais." + "\nA média de filhos é de " + mediaF + " filhos" + "\nO maior salario é de " + maiorS + " Reais." + "\nO percentual de pessoas com até R$100 é de " + S100 + " pessoas.")