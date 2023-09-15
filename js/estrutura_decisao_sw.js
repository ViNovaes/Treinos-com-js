//Aula do dia 05/09
//Estrutura switch case

console.log("Escolha uma das frutas \n1 - Uva \n2 - Goiaba \n3 - Morango \n4 - Sair")

let opcao

opcao = 1

switch(opcao){
    case 1: fruta = "Uva"
    break
    case 2: fruta = "Goiaba"
    break
    case 3: fruta = "Morango"
    break
    default: fruta = "Sair";
    break
}

console.log(`Você escolheu ${fruta}`)