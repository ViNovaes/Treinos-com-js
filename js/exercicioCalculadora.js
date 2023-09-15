function calculadora(){
    let resultado=0, calculo, sinal
    let n1 = document.getElementById("number1").value;
    let n2 = document.getElementById("number2").value;
    let escolha = document.getElementById("escolha").value;

    if(escolha==1){
        resultado = (parseInt(n1) + parseInt(n2))
        calculo = "soma"
        sinal = "+"
    }else if (escolha==2){
        resultado = (parseInt(n1) - parseInt(n2))
        calculo = "subtração"
        sinal = "-"
    }else if (escolha==3){
        resultado = (parseInt(n1) * parseInt(n2))
        calculo = "multiplicação"
        sinal = "x"
    }else if (escolha==4){
        resultado = (parseInt(n1) / parseInt(n2))
        calculo = "divisão"
        sinal = "/"
    }else {
        document.getElementById("resposta").innerHTML = "Você digitou algo errado. Tente novamente!"
        //console.log (`Você digitou algo errado. Tente novamente!`)
    }

    //element.getElementById("resposta").innerHTML = `Você escolheu ${calculo}. O resultado de ${n1}${sinal}${n2} é ${resultado}`
    document.getElementById("resposta").innerHTML = `Você escolheu ${calculo}. O resultado de ${n1}${sinal}${n2} é ${resultado}`

}
