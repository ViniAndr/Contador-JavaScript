const btnIncremento = document.getElementById("incremento");
const btnDecremento = document.getElementById("decremento");
const btnReset = document.getElementById("reset");
const displayContador = document.getElementById("display");

let contador = 0;

btnIncremento.addEventListener("click", () => {
  contador++;
  displayContador.innerText = contador;
  efeitos();
});

btnDecremento.addEventListener("click", () => {
  contador--;
  displayContador.innerText = contador;
  efeitos();
});
btnReset.addEventListener("click", () => {
  contador = 0;
  displayContador.innerText = contador;
  efeitos();
});

function efeitos() {
  if (contador < 0) {
    displayContador.style.color = "red";
  } else if (contador > 0) {
    displayContador.style.color = "pink";
  } else {
    displayContador.style.color = "white";
  }
}
