const numero = document.querySelectorAll(".numero");
const resultado = document.querySelector(".resultado span");
const sinais = document.querySelectorAll(".sinal");
const igual = document.querySelector(".igual");
const limpar = document.querySelector(".limpar");
const negativo = document.querySelector(".negativo");
const porcento = document.querySelector(".porcento");
let primeiroValor = "";
let ehPrimeiroValor = false;
let segundoValor = "";
let ehSegundoValor = false;
let sinal = "";
let resultadoValor;
for (let i = 0; i < numero.length; i++) {
    numero[i].addEventListener("click", (evento) => {
        let atributo = evento.target.getAttribute("value");
        if (ehPrimeiroValor === false) {
            pegaPrimeiroValor(atributo);
        }
        if (ehSegundoValor === false) {
            pegaSegundoValor(atributo);
        }
    });
}
function pegaPrimeiroValor(elemento) {
    resultado.innerHTML = "";
    primeiroValor += elemento;
    resultado.innerHTML = String(primeiroValor);
    primeiroValor = String(+primeiroValor);
}
function pegaSegundoValor(elemento) {
    if (primeiroValor != "" && sinal != "") {
        segundoValor += elemento;
        resultado.innerHTML = String(segundoValor);
        segundoValor = String(+segundoValor);
    }
}
function pegaSinal() {
    for (let i = 0; i < sinais.length; i++) {
        sinais[i].addEventListener("click", (evento) => {
            sinal = evento.target.getAttribute("value");
            ehPrimeiroValor = true;
        });
    }
}
pegaSinal();
igual.addEventListener("click", () => {
    resultado.innerHTML = "";
    if (sinal === "+") {
        resultadoValor = Number(primeiroValor) + Number(segundoValor);
    }
    else if (sinal === "-") {
        resultadoValor = Number(primeiroValor) - Number(segundoValor);
    }
    else if (sinal === "x") {
        resultadoValor = Number(primeiroValor) * Number(segundoValor);
    }
    else if (sinal === "/") {
        resultadoValor = Number(primeiroValor) / Number(segundoValor);
    }
    resultado.innerHTML = String(resultadoValor);
    primeiroValor = String(resultadoValor);
    segundoValor = "";
    verificaTamanhoDoResultado();
});
function verificaTamanhoDoResultado() {
    resultadoValor = JSON.stringify(resultadoValor);
    if (resultadoValor.length >= 8) {
        resultadoValor = JSON.parse(resultadoValor);
        resultado.innerHTML = Number(resultadoValor).toFixed(5);
    }
}
negativo.addEventListener("click", () => {
    resultado.innerHTML = "";
    if (resultado.innerHTML === "") {
        resultadoValor = "0";
        console.log(resultado.innerHTML);
        console.log(resultadoValor);
    }
    if (primeiroValor != "") {
        resultadoValor = Number(-primeiroValor);
        primeiroValor = resultadoValor;
    }
    if (primeiroValor != "" && segundoValor != "" && sinal != "") {
        resultadoValor = -resultadoValor;
    }
    resultado.innerHTML = resultadoValor;
});
porcento.addEventListener("click", () => {
    resultado.innerHTML = "";
    if (resultado.innerHTML === "") {
        resultadoValor = "0";
        console.log(resultado.innerHTML);
        console.log(resultadoValor);
    }
    if (primeiroValor != "") {
        resultadoValor = Number(primeiroValor) / 100;
        primeiroValor = resultadoValor;
    }
    if (primeiroValor != "" && segundoValor != "" && sinal != "") {
        resultadoValor = resultadoValor / 100;
    }
    resultado.innerHTML = resultadoValor;
});
limpar.addEventListener("click", () => {
    resultado.innerHTML = "0";
    primeiroValor = String();
    ehPrimeiroValor = false;
    segundoValor = String();
    ehSegundoValor = false;
    sinal = "";
    resultadoValor = String();
});
//# sourceMappingURL=index.js.map