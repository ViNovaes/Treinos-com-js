// aula do dia 04/09 - 05/09

//Estrutura de decisão

let a = 10;
let b = 20;

//if estrutura basíca
if (a>b){
    console.log("Entrou na estrutura 1");
}else[
    console.log("A não é maior que B")
]

if (b>a){
    console.log("Entrou na estrutura 2. A é menor que B");
}


//if aninhado
if(a<b){
    if(a>b){
        if(a!=b){
            console.log("Entrou na estrutura")
        }
    }
}


//Utilizando a estrutura elseif
let saudacao,numero;

console.log("Digite \t \n1 - Bom dia\n2 - Boa tarde\n3 - Boa noite")

numero = 1

if(numero===1){
    saudacao = "Bom dia, usuario!"
}else if(numero===2){
    saudacao = "Boa tarde, usuario!"
}else if(numero===3){
    saudacao = "Boa noite, usuario!"
}else{
    saudacao = "Tente novamente! Digite um numero de 1 a 3"
}
console.log(saudacao)

// saudacao = "Bom dia!";
