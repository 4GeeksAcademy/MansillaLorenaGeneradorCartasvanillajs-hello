/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generadorCartas() {
  let palos = ["♦", "♥", "♠", "♣"];
  let valores = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  let randomElement = (array) => {
    let numArray = Math.floor(Math.random() * array.length);
    return array[numArray];
  };
  let randomPalos = randomElement(palos);
  let randomValores = randomElement(valores);

  const colorPalo =
    randomPalos === "♥" || randomPalos === "♦" ? "red" : "black";
  let card = document.querySelector("#card");
  card.className = colorPalo;
  card.innerHTML = `<div id="top-card">
  <p>${randomPalos}</p>
  </div>
 <div id="number-card">
      <p>${randomValores}</p>
    </div><div id="foot-card">
        <p>${randomPalos}</p>
      </div></>;
`;
}

window.onload = function() {
  //write your code here
  let widthInput = document.getElementById("width-input");
  let heightInput = document.getElementById("height-input");
  widthInput.addEventListener("change", (e) => {
    console.log(e.target.value);
    let card = document.getElementById("card");
    card.style.width = e.target.value + "px";
  });
  heightInput.addEventListener("change", (e) => {
    console.log(e.target.value);
    let card = document.getElementById("card");
    card.style.height = e.target.value + "px";
  });

  document
    .getElementById("nuevaCarta")
    .addEventListener("click", generadorCartas);

  generadorCartas();
  setInterval(generadorCartas, 10000);
};
