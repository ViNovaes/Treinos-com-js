//Trabalhando com o DOM

document.getElementById("testada").innerHTML = "Batata";

document.getElementById("triste").innerHTML = "Batatinha"






//Tentando calcolar
function calcular(){
    let n1 = document.getElementById("number1").value;
    let n2 = document.getElementById("number2").value;

    //alert (parseInt(n1) + parseInt(n2))
    document.getElementById("teste").innerHTML = (parseInt(n1) + parseInt(n2))
}