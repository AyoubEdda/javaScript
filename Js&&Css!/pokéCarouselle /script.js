
$carousel = document.getElementById("carousel");
$suivant = document.getElementById("suivant");
$precedent = document.getElementById("precedent");
// Vous aurez besoin de ce genre de choses :
 //$carousel.style.borderColor = "#f00";
 //click = 0;
 var tableau = $carousel.children;
var active = 0;
var ptard = 1;

function selectionne(e) {
  // e.target correspond au <li> qui a été cliqué dans le <ul> !
  e.target.classList.toggle("selected");
}
$carousel.onclick = selectionne;

function suivant() {

if (ptard < tableau.length){ // empeche la var ptard d avoir une valeur + grande que le tableau et de ne plus rien selectionné ce qui active le else a 4
    tableau[active].classList.remove("visible"); // enleve la classe visible
    tableau[ptard].classList.add("visible"); // ajoute la classe visible

    active++; // incrémente pour passé a la partie suivante du tableau
    ptard++;
    }
  else{                                 // permet un retour a 0 et a un effet de boucle
  tableau[active].classList.remove("visible");
  active = 0;                                   // permet un retour au debut et de pouvoir relancer la fonction !
  tableau[active].classList.add("visible");
  ptard = 1;
  }
}

function precedent() {
  // if(active <)
  active--;
  ptard--;
  tableau[active].classList.add("visible");
  tableau[ptard].classList.remove("visible")

}

$suivant.onclick = suivant;
$precedent.onclick = precedent;
// function suppression(e) {
//   for (var i = 0; i < $carousel.children.length; i++) { // boucle qui crée un tableau pour les "li"  // faux !! mauvais ! !
//   console.log($carousel.children[i]);
//     if ($carousel.children[i].classList.contains("selected")) { // si tu contien la classe selected
//       $carousel.children[i].classList.add("hide"); // leur ajoute la classe hiden
//     }
//   }
// }
//suppression();
