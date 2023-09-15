//Criar uma função

function somaNumero(){
    let num1, num2, resp=0
    num1 = 10
    num2 = 20
    resp = num1+num2
    console.log(`O resultado da soma é ${resp}`)
}

//executando/utilizando uma função

somaNumero()

//Criando função com parametros

function somaValorParametros(num3, num4){
    let resp2 = 0
    resp2 = num3+num4
    console.log(`O resultado da soma é ${resp2}`)
}

somaValorParametros(20,30)

//Criando função com parametro e com retorno
function somaNum(num5,num6){
    let resp3=0
    resp3 = num5+num6
    return resp3
}

//executando função com parâmetros e com retorno
let resposta = somaNum(60,30)
console.log(`O resultado da soma é ${resposta}`)


//Criando função com parâmetros e com retorno
function somaNumero(num7, num8){
    return (num7+num8)
}

//
console.log(`o resulta`)