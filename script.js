const somar = document.querySelector("#somar").addEventListener("click", Somar);
const multiplicar = document
  .querySelector("#multiplicar")
  .addEventListener("click", Multiplicar);
const subtrair = document
  .querySelector("#subtrair")
  .addEventListener("click", Subtrair);
const dividir = document
  .querySelector("#dividir")
  .addEventListener("click", Dividir);

let resultado = 0;

function Somar() {
  let valor1 = Number(document.querySelector("#valor1").value);
  let valor2 = Number(document.querySelector("#valor2").value);
  if (valor1 && valor2) {
    resultado = `Resultado: ${valor1 + valor2}`;
  } else {
    resultado = "Dados em branco, favor digitar algo!";
  }

  document.querySelector(".resultado").textContent = resultado;
}

function Multiplicar() {
  let valor1 = Number(document.querySelector("#valor1").value);
  let valor2 = Number(document.querySelector("#valor2").value);

  if (valor1 && valor2) {
    resultado = `Resultado: ${valor1 * valor2}`;
  } else {
    resultado = "Dados em branco, favor digitar algo!";
  }

  document.querySelector(".resultado").textContent = resultado;
}

function Subtrair() {
  let valor1 = Number(document.querySelector("#valor1").value);
  let valor2 = Number(document.querySelector("#valor2").value);
  if (valor1 && valor2) {
    resultado = `Resultado: ${valor1 - valor2}`;
  } else {
    resultado = "Dados em branco, favor digitar algo!";
  }

  document.querySelector(".resultado").textContent = resultado;
}

function Dividir() {
  let valor1 = Number(document.querySelector("#valor1").value);
  let valor2 = Number(document.querySelector("#valor2").value);
  if (valor1 && valor2 && valor2 !== 0) {
    resultado = `Resultado: ${valor1 / valor2}`;
  } else if (valor2 === 0) {
    resultado = "Não há divisão por zero";
  } else {
    resultado = "Dados em branco, favor digitar algo!";
  }

  document.querySelector(".resultado").textContent = resultado;
}
