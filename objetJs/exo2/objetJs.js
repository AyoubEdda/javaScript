$prenom = document.getElementById("prenom").value;
$nom = document.getElementById("nom").value;
$numeros = document.getElementById("numeros").value;
$ajouter = document.getElementById("ajouter");
$ul = document.getElementById("ul");
$recherche = document.getElementById("recherche").value;
$search = document.getElementById("search");
$resultatRecherche = document.getElementById("resultatRecherche");

contacts = [{
  prenom: "Julien",
  nom: "Grillot",
  numero: "0123456789"
  }, {
  prenom: "John",
  nom: "Smith",
  numero: "0123456789"
  }];

 function texteContact(argument) {
   var c = argument.prenom + " " + argument.nom + " " + argument.numero;
   return c ;
 }

// function texteContact() {
//   $m = "";
//   for (var id in  contacts) {
//     $m +="<li>"+contacts[id].prenom+ " "+contacts[id].nom
//     + " " +" "+contacts[id].numero +"</li>"; // on doit reprecicer l emplacement de chaque valeur : exemple  contacts[id].nom ; pour lui dire ou il doit la cherché !
// 	}
// }
function affichage() {
  var $m = "";
  $ul.innerHTML = $m;
  for (i = 0 ;i < contacts.length; i++){
    $m += "<li>" + texteContact(contacts[i]) + "</li>";
console.log("regarde");
  $ul.innerHTML = $m;
  }
}

$ajouter.onclick = function ajout(){
 contacts.push({
   prenom : $prenom,
   nom : $nom,
   numero : $numeros,
   })

 affichage();
}

$search.onclick = function rech(){

 for ( i = 0; i < contacts.length ; i++ ){
 if (contacts[i].prenom == $recherche || contacts[i].nom == $recherche || contacts[i].numero == $recherche ){
  $resultatRecherche.innerHTML += "<li>" +  texteContact(contacts[i]) + "</li>";
  }
}
}



affichage();
ajout();
rech();
/*$ajouter.onclick = function search() {
console.log("heyy !!" );
}*/

//Object.is() ; regarder sa sur internet si jamais fidl pas enregister !
