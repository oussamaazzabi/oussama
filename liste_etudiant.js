let etudiant = [];
let btnValider;




function afficherTableau(){
  let tbody = document.querySelector("tbody");
  let newHTML = "";
  for(let i=0; i < etudiant.length; i++){
    newHTML += "<tr>";
    newHTML += "<th scope='row'>" + etudiant[i].nom+" "+ etudiant[i].prenom+"</th>";
    newHTML += "<td>" + etudiant[i].email + "</td>";
    newHTML += "<td>" + etudiant[i].moyenne + "</td>";
    newHTML += "<td>" + etudiant[i].detail + "</td>";
    newHTML += "<td>" + etudiant[i].btn + "</td>";
    newHTML += "</tr>";
  }
  tbody.innerHTML = newHTML;
}

function ajouterEtudiant(){
  
  const nomVal = document.getElementById("nom").value;
  const prenomVal = document.getElementById("prenom").value;
  const emailVal = document.getElementById("email").value;
  note1 = document.getElementById("note1").value,
  note2 = document.getElementById("note2").value,
  note3 = document.getElementById("note3").value;
  var moyenne=(parseInt(note1)+parseInt(note2)+parseInt(note3))/3;
  
  const newEtudiant = new Etudiant (nomVal, prenomVal, emailVal,moyenne);
  
  
  etudiant.push(newEtudiant);
  console.table(etudiant);
  afficherTableau();
  
}

  const titreVal = document.getElementById("prenom").value;
  const auteurVal = document.getElementById("email").value;


function init(){
  btnValider = document.getElementById("btnValider");
  btnValider.addEventListener("click", ajouterEtudiant)

}
function main(){
  init();
  afficherTableau();
  
}




window.addEventListener("load", main); 