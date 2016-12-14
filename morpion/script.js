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
  if ($tableau[0].classList.contains("player1") && $tableau[1].classList.contains("player1") && $tableau[2].classList.contains("player1")){
    console.log("hey");
    alert("tu as gagné !!");
    recommencer();
  }
}

}



$jeux.onclick = selectionne;
$reset.onclick = recommencer;
