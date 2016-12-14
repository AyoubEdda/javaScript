var tableau = ["Bob", "Julien", "Roger"];
$ul = document.getElementById("liste");
$ajout = document.getElementById("ajouter");
$prenom = document.getElementById("text");
$suppr = document.getElementById("supprimer");

function afficherListe() {
$m = "";
for (i = 0; i < tableau.length; i++) {
    $m +="<li>"+tableau[i]+"</li>";
	}
}

function affichage() {
$ul.innerHTML = $m;

}

$ajout.onclick = function push() {
 tableau.push($prenom.value);
afficherListe();
affichage();
}

$suppr.onclick = function pop() {
tableau.pop();
afficherListe();
affichage();
}

afficherListe();
affichage();
 push();
