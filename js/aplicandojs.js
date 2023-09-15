

// aula do dia 04/09


console.log("Alguma coisa em aspas duplas");

console.log('Alguma coisa em apostrofo');

console.log(`Alguma coisa em `);

let name = "Victória";
console.log ("Olá",name)

let variavel = 20;
let nombre = 'Senac';
console.log(nombre);

function somaValor(){
    let valor;
    valor = 50;
    console.log(valor);
}
somaValor();

// Declarando variavel com let e const

let nome, email, telefone, cpf

//inicializando as variaveis

nome = "Alvarez"
email = 'sacsenac@sp.senac.edu';
telefone = 11934521252
cpf = '321.654.987-00'

console.log(`Seu cpf é ${cpf}`)

//variavel que não muda em tempo de execução

const pi = 3.14159265359;

console.log (`Valor de pi é ${pi}`)

const meuNome = "Victória Amorim"
console.log ("Meu nome é ",meuNome)
//meuNome = 'outro Nome aqui'

const primeiroNome = 'Julia';
const segundoNome = 'Novais';

console.log (`Nome ${primeiroNome} sobrenome ${segundoNome}`)

//operadores

let num1, num2, resp;
num1 = 10;
num2 = 20;

console.log(`Contas utilizando os numeros ${num1} e o ${num2}`)
resp = num1+num2;
console.log("Soma:",resp)
resp = num1-num2;
console.log("Subtração:",resp)
resp = num1*num2;
console.log("Multiplicação:",resp)
resp = num1/num2;
console.log("Divisão:",resp)


let a = 3

let x = (100+50) *a
console.log(`O valor da expressão é ${x}`)


//Operadores

let z = 5
//Incrementando o Z
z++
let y = z
console.log("Valor de Y:",y)

let w = 5
//Decrementando o w-- é igual a w=w-1
w--
let m = w
console.log("Valor de M:",m)

//exponenciação
let exp = 5
let op = exp ** 2
let mat = Math.pow(exp,2)
console.log(`Exponenciação ${op}`)
console.log(`Exponenciação com classe matemática: ${mat}`)

//Operador de atribuição JavaScript
let r = 10
let s = 10+r
console.log(`Valor de s: ${s}`)

let d = 10+r
console.log(`Valor de s: ${d}`)

//Operadores relacionais retorna true/false
let b ="batata";
let q ="Queijo"

let v = b && q
console.log(`Valor de V é: ${v}`)

let i = b || q;
console.log(`Valor de I é: ${i}`)

//Variaveis do tipo objeto
const pessoa = {
    nome1:"Matheus",
    sobreNome1:"Gonzaga"
}
console.log(`O nome completo do aluno nota 10 é ${pessoa.nome1} ${pessoa.sobreNome1}`)

//Variveis do tipo array (vetores)
const car = [
    "WV",
    "Ford",
    "Chevrolet"
];
console.log(`O carro escolhido é ${car[2]}`)















