const gooiBtn = document.getElementById("gooiBtn");
const resultaatDiv = document.getElementById("resultaat");
const tellingDiv = document.getElementById("telling");

let dobbelArray = [];



function gooiDobbelstenen() {
  dobbelArray = [];

  for (let i = 0; i < 5; i++) {
    let randomGetal = Math.floor(Math.random() * 6) + 1;
    dobbelArray.push(randomGetal);
  }

  resultaatDiv.textContent = "Gegooid: " + dobbelArray.join(", ");

  toonTelling();
}



function countNumber(getal) {
  let teller = 0;

  for (let i = 0; i < dobbelArray.length; i++) {
    if (dobbelArray[i] === getal) {
      teller++;
    }
  }

  return teller;
}

function toonTelling() {
  tellingDiv.innerHTML = "";

  for (let i = 1; i <= 6; i++) {
    tellingDiv.innerHTML +=
      "Getal " + i + ": " + countNumber(i) + " keer<br>";
  }
}

gooiBtn.addEventListener("click", gooiDobbelstenen);
