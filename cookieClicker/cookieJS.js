
$bouton = document.getElementById("bouton");

$score = document.getElementById("score");

score = 0;

function afficherScore() {
   $score.innerHTML = "Score : " + score;
}

$bouton.onclick = clic;

afficherScore();
function afficherNbMultiplicateur() {
   $multiplicateur.innerHTML = "Multiplicateur x" + nbMultiplicateur + " (prix du prochain : " + prix() + ")";
}
function clic() {
   score = score + nbMultiplicateur;
   afficherScore();
}
function prix() {
   return 20 * nbMultiplicateur * nbMultiplicateur;
}
function acheterMultiplicateur() {
   if (score >= prix()) {
       score = score - prix();
       nbMultiplicateur = nbMultiplicateur + 1;
       afficherNbMultiplicateur();
       afficherScore();
   } else {
       alert("Votre score est insuffisant !");
   }
}
function autoclic() {
   myVar = setInterval(clic, 1000);}
   $bouton.onclick = clic;
$multiplicateur.onclick = acheterMultiplicateur;
afficherScore();
afficherNbMultiplicateur();$auto.onclick= autoclic();
