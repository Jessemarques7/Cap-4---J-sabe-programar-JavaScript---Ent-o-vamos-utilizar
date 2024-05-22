const somar = document.getElementById("somar").addEventListener("click", Somar);
const multiplicar = document
  .getElementById("multiplicar")
  .addEventListener("click", Multiplicar);
const subtrair = document
  .getElementById("subtrair")
  .addEventListener("click", Subtrair);
const dividir = document
  .getElementById("dividir")
  .addEventListener("click", Dividir);

let resultado;

function Somar() {
  let valor1 = document.getElementById("valor1").value;
  let valor2 = document.getElementById("valor2").value;
  if (valor1 !== "" && valor2 !== "") {
    resultado = `Resultado: ${Number(valor1) + Number(valor2)}`;
  } else {
    resultado = "Dados em branco, favor digitar algo!";
  }

  document.getElementById("resultado").textContent = resultado;
}

function Multiplicar() {
  let valor1 = document.getElementById("valor1").value;
  let valor2 = document.getElementById("valor2").value;
  if (valor1 !== "" && valor2 !== "") {
    resultado = `Resultado: ${Number(valor1) * Number(valor2)}`;
  } else {
    resultado = "Dados em branco, favor digitar algo!";
  }

  document.getElementById("resultado").textContent = resultado;
}

function Subtrair() {
  let valor1 = document.getElementById("valor1").value;
  let valor2 = document.getElementById("valor2").value;
  if (valor1 !== "" && valor2 !== "") {
    resultado = `Resultado: ${Number(valor1) - Number(valor2)}`;
  } else {
    resultado = "Dados em branco, favor digitar algo!";
  }

  document.getElementById("resultado").textContent = resultado;
}

function Dividir() {
  let valor1 = document.getElementById("valor1").value;
  let valor2 = document.getElementById("valor2").value;
  if (valor1 !== "" && valor2 !== "") {
    valor1 = Number(valor1);
    valor2 = Number(valor2);
    if (valor2 !== 0) {
      resultado = `Resultado: ${valor1 / valor2}`;
    } else {
      resultado = "Não há divisão por zero";
    }
  } else {
    resultado = "Dados em branco, favor digitar algo!";
  }

  document.getElementById("resultado").textContent = resultado;
}
