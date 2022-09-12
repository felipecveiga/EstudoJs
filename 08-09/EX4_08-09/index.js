let custo, produto, percent, venda
percent = prompt("Escreva seu percentual")
alert("\nO seu percentual digitado é: " + percent + "%");
custo = prompt("Digite o custo de seu produto")
alert("o custo informado é : " + custo);
venda = parseInt (custo) + (custo * percent) / 100
alert("A sua venda é R$:"  + venda + " reais");

