let gasolina = document.getElementById("gasolina");
let etanol = document.getElementById("etanol");
let btnCalcular = document.getElementById("btn-calcular");
let img = document.getElementById("img");
let btnLimpar = document.getElementById("btn-limpar");

btnCalcular.addEventListener("click", calcular);
btnLimpar.addEventListener("click", function() {
    img.setAttribute("src", "./img/neutro.png");
})

function calcular(event) {

    event.preventDefault();
    
    if( gasolina.value == "" || etanol.value == "" ) {
        alert("Por favor, preencha todos os campos!!");
    } else if ((etanol.value.replace(",", ".") / gasolina.value.replace(",", ".")) < 0.7) {
        img.setAttribute("src", "./img/etanol.png");
    } else {
        img.setAttribute("src", "./img/gasolina.png");
    }
}
