$jeux = document.getElementById("jeux");
$reset = document.getElementById('reset');

var click = 0;
var $tableau = $jeux.children;


function selectionne(e) {
  // e.target correspond au <li> qui a été cliqué dans le <ul> !
  if ( e.target.classList != "player1" && e.target.classList != "player2"){
  if (click %2 ==  0){
  e.target.classList.toggle("player1");

  }
  else {
    e.target.classList.toggle("player2");
  }
 click++
  console.log(click);
  vainqueur();
}
}

function recommencer() {

  for (var i = 0; i < $tableau.length; i++) {
      if ($jeux.children[i].classList.contains("player1")){
      $jeux.children[i].classList.remove("player1");
    }
    else {
      $jeux.children[i].classList.remove("player2");

    }

  click = 0 ;

}

}

function vainqueur() {
  for (var i = 0; i < $tableau.length; i++){

  if ($tableau[0].classList.contains("player1") && $tableau[1].classList.contains("player1") && $tableau[2].classList.contains("player1") || // verticale pour joueur1
      $tableau[3].classList.contains("player1") && $tableau[4].classList.contains("player1") && $tableau[5].classList.contains("player1") ||  // verifie pour choisir gagnant
      $tableau[6].classList.contains("player1") && $tableau[7].classList.contains("player1") && $tableau[8].classList.contains("player1") ||
      $tableau[0].classList.contains("player1") && $tableau[3].classList.contains("player1") && $tableau[6].classList.contains("player1") ||  // horizotale pour j1
      $tableau[1].classList.contains("player1") && $tableau[4].classList.contains("player1") && $tableau[7].classList.contains("player1") ||
      $tableau[2].classList.contains("player1") && $tableau[5].classList.contains("player1") && $tableau[8].classList.contains("player1") ||
      $tableau[0].classList.contains("player1") && $tableau[4].classList.contains("player1") && $tableau[8].classList.contains("player1") || // Verifie les diagonale !!
      $tableau[2].classList.contains("player1") && $tableau[4].classList.contains("player1") && $tableau[6].classList.contains("player1")){  // pour le joueur 1

      console.log("hey");
      alert("Player 1 Win !!");
      recommencer();
  }
  // affiche que le joueur 2 a gagné !

  else if ($tableau[0].classList.contains("player2") && $tableau[1].classList.contains("player2") && $tableau[2].classList.contains("player2") || // horizotale pour joueur2
           $tableau[3].classList.contains("player2") && $tableau[4].classList.contains("player2") && $tableau[5].classList.contains("player2") ||
           $tableau[6].classList.contains("player2") && $tableau[7].classList.contains("player2") && $tableau[8].classList.contains("player2") ||
           $tableau[0].classList.contains("player2") && $tableau[3].classList.contains("player2") && $tableau[6].classList.contains("player2") || // verifie la verticale
           $tableau[1].classList.contains("player2") && $tableau[4].classList.contains("player2") && $tableau[7].classList.contains("player2") ||
           $tableau[2].classList.contains("player2") && $tableau[5].classList.contains("player2") && $tableau[8].classList.contains("player2") ||
           $tableau[0].classList.contains("player2") && $tableau[4].classList.contains("player2") && $tableau[8].classList.contains("player2") || // Verifie les diagonale !!
           $tableau[2].classList.contains("player2") && $tableau[4].classList.contains("player2") && $tableau[6].classList.contains("player2")) { // pour le joueur2

             alert("Player2 Win !!");
             recommencer();
           }

           else if (click == 9) {
             alert("Match nul !!");
             recommencer();
           }
        }
}



$jeux.onclick = selectionne;
$reset.onclick = recommencer;
