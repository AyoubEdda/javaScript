$boutton = document.getElementById("boutton");
$affichage = document.getElementById("affichage");
$multiplicateur = document.getElementById("multiplicateur");
$autoclick = document.getElementById("autoclick");

var score = 0;
var compteur = 1;
var cout = 50;
var future = 5;
var auto = 1;

$boutton.onclick = function augmente () {
  score = score + compteur;
  console.log(score);
  affichage();
}

function affichage () {
  $affichage.innerHTML = "Score :" + score ;
  $multiplicateur.innerHTML = "Bonus de : " + "x" +future + " " +  "prix :" + cout;
  $autoclick.innerHTML = "Autoclick de : " + auto + "prix : " + cout;
}

$multiplicateur.onclick = function incrementer() {
  if (score >= cout){
      compteur = compteur * 5;
      score -= cout;
      console.log(compteur);
      cout = cout * 2;
      future = future *5;
  }
  else{
    alert("Tu na pas assez de point ! ")
  }
    affichage();
}

$autoclick.onclick = function autoclick() {
  if(score >= cout){
    auto = auto * 2;
    score -= cout;
  }
  else {
      alert("Tu na pas assez de point ! ")
  }
}


setInterval(function(){
   score = score + auto;
   console.log(auto);
   affichage();
 }, 1000);

affichage();
