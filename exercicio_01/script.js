alert("Bem vindo a nosso Sistema");

let numberOne = prompt("Insira o primeiro numero: ");
let numberTwo = prompt("Insira o segundo numero: ");
const addition = Number(numberOne) +  Number(numberTwo);
const subtraction = Number(numberOne) -  Number(numberTwo);
const multiplication = Number(numberOne) *  Number(numberTwo);
const division = Number(numberOne) /  Number(numberTwo);
const rest = Number(numberOne) %  Number(numberTwo);


alert(`A Soma dos dois numeros é  : ${addition}`)
alert(`A Substração dos dois numeros é  : ${subtraction}`)
alert(`A Multiplicação dos dois numeros é  : ${multiplication.toFixed(2)}`)
alert(`A Divisão dos dois numeros é  : ${division.toFixed(2)}`)
alert(`O resto da divisão dos dois numeros é  : ${rest}`)

let par = addition%2 == 0

if (par){
    alert ('A Soma do Numero é Par ')
}else{
    alert ('A Soma do numero é Impar ')
}

let verification = numberOne===numberTwo

if (verification){
    alert("Os Numeros são Iguais")
}else{
    alert("Os Numeros são Diferentes")
}
