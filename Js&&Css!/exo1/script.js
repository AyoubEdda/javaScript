
$suppr = document.getElementById("supprimer");
$liste = document.getElementById("liste");
$restaure = document.getElementById('restaure');

function selectionne(e) {
  // e.target correspond au <li> qui a été cliqué dans le <ul> !
  e.target.classList.toggle("selected");
}
$liste.onclick = selectionne;

function suppression(e) {
  for (var i = 0; i < $liste.children.length; i++) {
    if ($liste.children[i].classList.contains("selected")) {
      $liste.children[i].classList.add("hide");
    }
  }
}
$suppr.onclick = suppression;

function restauration(e) {
  for (var i = 0; i < $liste.children.length; i++) {
    if($liste.children[i].classList.contains("hide")) {
      $liste.children[i].classList.remove("hide");
    }
  }
}
$restaure.onclick = restauration;
