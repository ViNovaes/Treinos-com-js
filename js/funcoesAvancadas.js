// função avançada 

function escreverNomes(nome){
    return nome
}
//executando a função
let nNome = escreverNomes("Victória")
let sobreNome = escreverNomes("Amorim")

console.log(`Olá ${nNome} ${sobreNome}`)


// Função como uma expressão

const area = function (base,altura) {
    return base * altura
}

let x = area(10,20)
console.log(`A área é ${x}`)


const p1 = 3.14

let resultado = area (40,50)*p1
console.log(`O resultado é ${resultado}`)

// Função normal
function somaValor(num1,num2){
    return(num1,num2)
}
somaValor(20,30)

//Função anônima
const resp = function (num1,num2){
    return (num1+num2)
}

let valor = resp(30,30)
console.log(`Testando a função anonima em soma. ${valor}`)


//Função de seta - Arrow Function

const v = () => {
    console.log(`Olá mundo!`)
}

v()


//Construindo arrow function com parâmetros
const raiz = (q) => {
    return q*q
}
let result = raiz(4)


console.log(`O resultado da raiz de 4 é ${result}`)


//Função predefinidas
let seno = Math.sin(30)
let quad = Math.sqrt(4)
let aleatorio = Math.random()
console.log("O seno de 30 é",seno)
console.log("O quadrado de 4 é",quad)
console.log("O numero aleatório é",aleatorio)

