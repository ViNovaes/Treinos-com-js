// Declaração de variáveis
// Tipos de variaveis e exemplos delas

/* var num1 = 20;
var num2 = "senac";
var resp = num1+num2;

console.log(resp); */

// Variável Let sendo utilizada

let num1 = 12;
let num2 = 9;
let resp = num1+num2;

console.log("A soma é",resp);

//Dois tipos de escopo
//Escopo do script
//Scopo da função
//Criando uma function

function valor (){
    let num1 = 30;
    console.log("Valor de num1 fora da função:",num1)
}
//Executando uma função
valor();

console.log("Valor de num1 fora da função:",num1)


//Declarando variaveis com const
// Const = valor nunca muda

const pi = 3.14;
let total = 50;
let resposta = total+pi



console.log("A resposta é: ", resposta);

alert("A resposta é: ", resposta);