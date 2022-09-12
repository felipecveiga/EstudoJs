let horas , excedente, salario, salarioT
horas = prompt("Digite suas horas trabalhadas")
salario = horas*10
excedente = (horas - 50)*20
salarioT = parseInt(salario) + parseInt(excedente)

if( horas > 50){
    alert("Suas horas Extras são: " + excedente + "\nSeu salario total é : " + salarioT)
}else {
    alert("Você não tem horas extras")
}