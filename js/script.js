let paragraphe = document.querySelector("main");
console.log(paragraphe);
//Extraire l'heure actuel à l'aide de l'objet Date()
let current = new Date();
console.log(current);

// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Stocker l'heure , minute , seconde  dans des varaiables
let heure = current.getHours();
let minute = current.getMinutes();
let seconde = current.getSeconds();

console.log("heure actuelle", heure);
console.log("minute actuelle", minute);
console.log("seconde actuelle", seconde);

// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
let valeurAngulaireHeures =
  30 * heure + (30 / 60) * minute + (30 / 3600) * seconde; //heure (30/3600) degré;
let valeurAngulaireMinutes = 6 * minute + (6 / 60) * seconde; //minute (6/60) 0.1 degré;
let valeurAngulaireSecondes = 6 * seconde; //secondes (360/60) 6 degrés;

console.log("angle heure", valeurAngulaireHeures);
console.log("angle minute", valeurAngulaireMinutes);
console.log("angle seconde", valeurAngulaireSecondes);

AIGUILLEHR.style.transform = `rotate(${valeurAngulaireHeures}deg)`;
AIGUILLEMIN.style.transform = `rotate(${valeurAngulaireMinutes}deg)`;
AIGUILLESEC.style.transform = `rotate(${valeurAngulaireSecondes}deg)`;
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré

// Déplacer les aiguilles
function demarrerLaMontre() {
  valeurAngulaireHeures += 30 / 3600; //ajout de (30/3600) degré;
  valeurAngulaireMinutes += 6 / 60; //ajout de (6/60) 0.1 degré;
  valeurAngulaireSecondes += 6; //ajout de 6 degrés;

  AIGUILLEHR.style.transform = `rotate(${valeurAngulaireHeures}deg)`;
  AIGUILLEMIN.style.transform = `rotate(${valeurAngulaireMinutes}deg)`;
  AIGUILLESEC.style.transform = `rotate(${valeurAngulaireSecondes}deg)`;
}

// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);
