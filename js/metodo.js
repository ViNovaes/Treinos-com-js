//Metodos e objetos

const pessoa = {
    primeiroNome: "José",
    sobreNome: "Nunes",
    codigo: 1578,
    fullname: function(){
        return this.primeiroNome + " " + this.sobreNome;
    }
}

let pnome = pessoa.primeiroNome = "Alexia"
let psobre = pessoa.sobreNome = "Vicentini"

console.log(`Olá ${pessoa.fullname(pnome,psobre)}`)

const calculadora0 = {
    num1: 7.9,
    nuum2: 9.7,
    soma:(num1,num2) => {
        return num1+num2;
    }
}



//arrow function com parametro
const exemplo1 = (num1,num2) =>{
    return num1 * num2;
}
//Executando a função 
exemplo1(7,9)
console.log()


//arrow function sem parametro0
const exemplo2 = () =>{
    let resp = num1 * num2;
    return resp;
}
//Executando a função 
//exemplo2(1)

//Exercicio calculadora

console.log("Calculadora")



const calculadora ={
    num1: 20,
    num2: 30,
    soma: (num1,num2) =>{
        this.num1 = num1
        this.num2 = num2
        return (this.num1+this.num2)
    },
    multi: (num1,num2) =>{
        this.num1 = num1
        this.num2 = num2
        return (this.num1*this.num2)
    },
        sub: (num1,num2) =>{
        this.num1 = num1
        this.num2 = num2
        return (this.num1-this.num2)
    },
        divi: (num1,num2) =>{
        this.num1 = num1
        this.num2 = num2
        return (this.num1/this.num2)
    }
}

let opcao = 1;

    switch(opcao){
        case 1: opcao = soma
        break
        case 2: opcao = multi
        break
        case 3: opcao = sub
        break
        case 3: opcao = divi
        break
        default: opcao = sair
        break
    }




//calculadora.soma(50,20)


/* switch(opcao){}



/*     divi: (num1,num2) =>{
        return num1/num2
    } 
    vezes: (num1,num2) =>{
        return num1*num2
    } 
    soma: (num1,num2) =>{
        return num1+num2
    }  */



