//{ calculate } import './calculator';


/*
//  const objets = ["button", "submit", "reset", "danger", "secondary", "numpad digit", "numpad dot",
//      "clear", "percentage", "plusoumoins", "divideby", "times", "minus", "plus", "equals"];
    const bouttons = [...document.querySelectorAll("button")];
    const signes = [...document.querySelectorAll( "id") ];
    const pourcent = document.getElementById("percentage",);
    const egal = document.getElementById("equals");
    const entrInfer = document.getElementById("input");
    const entrSuper = document.getElementById("calcul");
    const multiplications = document.getElementById("times");
    const soustraction = document.getElementById("minus");
    const addition = document.getElementById("plus");
    const division = document.getElementById("divideby");
    //document.getElementById("calcul");
   // document.getElementById("calcul");
    //const chiffre = document.getElementsByClassName("numpad digit");
    const dangerAc = document.getElementsByClassName("danger");
    const buts = "";
    console.log(signes);

    function general(exer) {
      exer.addEventListener("click", e => {
      const valeurRetour = e.target.textContent;
      console.log(valeurRetour);
      entrSuper.textContent = valeurRetour; 
      entrInfer.value = valeurRetour;
      })
    }

   bouttons.forEach((boutton) => general(boutton));

   //
   

   //function symbol(symbol){
switch(symbol){
  case "times" :
    symbol.addEventListener("click", 
    e =>{
      const mathh = e.target.textContent;
      entrSuper.textContent = valeurRetour;
      console.log(mathh); 
  });
    
    
}
//}
bouttons.forEach((elem) => symbol(elem));
      function bouttonsClose(e) {
        e.target='';
      }
      
      function bouttonsNoClose(e) {
        e.target="";
      }
      
      // Write a named function with event handler properties
     */
    /*
      let valeurEntree = document.getElementById("input");
      const values = document.querySelectorAll(".numpad");
      const ecrandeCalcul = document.getElementById("calcul");
      const symbolEgal = document.getElementById("equals");
      const tansformInPercent = document.getElementById("percentage");
      const pourEffacer = document.getElementById("clear");
      const retourZero = document.getElementById("reset");
      const ajoutEtSoust = document.getElementById("plusoumoins");
      // declarations de valeur initiale
      valeurEntree.value = "";
      ecrandeCalcul.innerText = "";
      let preventAlotEqual = 0;
      let deroulementMath = 0;
      // signes d'operations boucles
      const keys = ['plus', 'minus', 'times', 'divideby'];
      const operators = [];
      keys.forEach(function(key){
          operators.push(document.getElementById(key));
      })
      // données initiales
      function reinitializeInput() {
          listeGrandElem = []
          petiteList = []
      }
      // valeur = =
      function reinitializeAll() {
          if (ecrandeCalcul.innerText.includes("=")) {
              reinitializeInput()
              valeurEntree.value = "";
              ecrandeCalcul.innerText = "";
          }
      }
      // Variable d'entrée
      let listeGrandElem = [];
      let petiteList = [];
      // fonction pour la condition de .  et 0
      function removeDot(table) {
          let gestionPointZero = []
          table.forEach((item) => {
              switch (item) {
                  case '0':
                      if (gestionPointZero.length >= 1 || ecrandeCalcul.innerText !== ""){
                        gestionPointZero.push(item)
                      }
                      break;
                  case '.':
                      if (gestionPointZero.length >= 1 && !gestionPointZero.includes(".")){
                        gestionPointZero.push(".")
                      }else if(gestionPointZero.length === 0){
                        gestionPointZero.push("0")
                        gestionPointZero.push(".")
                      }
                      break;
                  default:
                    gestionPointZero.push(item);
              }
          })
          return gestionPointZero
      }
      // fonction pour Netoyer C
      function clearTheInput() {
          reinitializeInput()
          valeurEntree.value = "";
      }
      // fonction pour Effacer AC
      function clearAll(event) {
          event.preventDefault();
          reinitializeInput()
          valeurEntree.value = "";
          ecrandeCalcul.innerText = "";
      }
      // fonction pour les symboles
      function computation() {
          let newLabel = ecrandeCalcul.innerText;
          let newLabelValue = newLabel.replace("×","*").replace("÷","/").replace("=","");
          // displayCalcul.innerText = `${displayCalcul.innerText} ${inputValue.value} =`
          valeurEntree.value = `${eval(newLabelValue + valeurEntree.value)}`
      }
      // fonction pour changement des opperations
      function changeLabelText(event, param) {
          event.preventDefault();
          if (ecrandeCalcul.innerText !== "" || valeurEntree.value !== "") {
            deroulementMath += 1
              if (deroulementMath > 1){
                  computation()
              }
              ecrandeCalcul.innerText = valeurEntree.value + " " + param.innerText
          }
          reinitializeInput()
          preventAlotEqual = 0
      }
      // fonction pour changer la valeur d'entrée
      function changevaleurEntree(event) {
          reinitializeAll()
          if (ecrandeCalcul.innerText === "") {
            listeGrandElem.push(event.target.innerText);
              valeurEntree.value = removeDot(listeGrandElem).join("");
          }else{
            petiteList.push(event.target.innerText);
              valeurEntree.value = removeDot(petiteList).join("")
          }
      }
      // pour changer la valeur d'entrée
      function displayvaleurEntree(event) {
          event.addEventListener("click", changevaleurEntree);
      }
      // pour l'equalité
      function give_result(event) {
          event.preventDefault();
          preventAlotEqual +=1;
          deroulementMath = 0;
          if (preventAlotEqual > 1){
         //     return
         valeurEntree.value = preventAlotEqual +=1;
          }else{
            return
          }
          ecrandeCalcul.innerText = `${ecrandeCalcul.innerText} ${valeurEntree.value} =`
          valeurEntree.value = ""
          computation()
      }
      // pourcentage    % Calcule
      function transformInPercent(event) {
          event.preventDefault();
          valeurEntree.value = Number(valeurEntree.value) / 100
      }
      // operation plus ou moins
      function plus_moin() {
        valeurEntree.value = `${valeurEntree.value* (-1)}`
      }
      ajoutEtSoust.addEventListener("click",plus_moin)
      values.forEach((value) => displayvaleurEntree(value));
      operators.forEach((operator) => operator.addEventListener("click", () => {
          changeLabelText(event, operator)
      }))
      symbolEgal.addEventListener("click", give_result);
      tansformInPercent.addEventListener("click",transformInPercent);
      pourEffacer.addEventListener("click", clearTheInput);
      //retourZero.addEventListener("click", clearAll);
      retourZero.addEventListener("click", clearAll);
      */

      let valeurEntree = document.getElementById("input");
const values = document.querySelectorAll(".numpad");
const ecrandeCalcul = document.getElementById("calcul");
const symbolEgal = document.getElementById("equals");
const tansformInPercent = document.getElementById("percentage");
const pourEffacer = document.getElementById("clear");
const retourZero = document.getElementById("reset");
const ajoutEtSoust = document.getElementById("plusoumoins");
const pieElement = document.getElementById("pie");
const expElement = document.getElementById("exponatiel");
const extElement = document.getElementById("extension");
const logElement = document.getElementById("log");

valeurEntree.addEventListener('keydown', (e) => {
  e.preventDefault();
})


// declarations de valeur initiale
valeurEntree.value = "";
ecrandeCalcul.innerText = "";
let preventAlotEqual = 0;
let deroulementMath = 0;
// signes d'operations boucles
const keys = ['plus', 'minus', 'times', 'divideby'];
const operators = [];
keys.forEach(function(key) {
  operators.push(document.getElementById(key));
})
// données initiales
function reinitializeInput() {
  listeGrandElem = []
  petiteList = []
}
// valeur = =
function reinitializeAll() {
  if (ecrandeCalcul.innerText.includes("=")) {
    reinitializeInput()
    valeurEntree.value = "";
    ecrandeCalcul.innerText = "";
  }
}
// Variable d'entrée
let listeGrandElem = [];
let petiteList = [];
// fonction pour la condition de .  et 0
function removeDot(table) {
  let gestionPointZero = []
  table.forEach((item) => {
    switch (item) {
      case '0':
        if (gestionPointZero.length >= 1 || ecrandeCalcul.innerText !== "") {
          gestionPointZero.push(item)
        }
        break;
      case '.':
        if (gestionPointZero.length >= 1 && !gestionPointZero.includes(".")) {
          gestionPointZero.push(".")
        } else if (gestionPointZero.length === 0) {
          gestionPointZero.push("0")
          gestionPointZero.push(".")
        }
        break;
      default:
        gestionPointZero.push(item);
    }
  })
  return gestionPointZero
}
// fonction pour Netoyer C
function clearTheInput() {
  reinitializeInput()
  valeurEntree.value = "";
}
// fonction pour Effacer AC
function clearAll(event) {
  event.preventDefault();
  reinitializeInput()
  valeurEntree.value = "";
  ecrandeCalcul.innerText = "";
}
// fonction pour les symboles
function computation() {
  let newLabel = ecrandeCalcul.innerText;
  let newLabelValue = newLabel.replace("×", "*").replace("÷",
"/").replace("=", "");
  // displayCalcul.innerText = `${displayCalcul.innerText}${inputValue.value} =`
  valeurEntree.value = `${eval(newLabelValue + valeurEntree.value)}`
}
// fonction pour changement des opperations
function changeLabelText(event, param) {
  event.preventDefault();
  if (ecrandeCalcul.innerText !== "" || valeurEntree.value !== "") {
    deroulementMath += 1
    if (deroulementMath > 1) {
      computation()
    }
    ecrandeCalcul.innerText = valeurEntree.value + " " + param.innerText
  }
  reinitializeInput()
  preventAlotEqual = 0
}
// fonction pour changer la valeur d'entrée
function changevaleurEntree(event) {
  reinitializeAll()
  if (ecrandeCalcul.innerText === "") {
    listeGrandElem.push(event.target.innerText);
    valeurEntree.value = removeDot(listeGrandElem).join("");
  } else {
    petiteList.push(event.target.innerText);
    valeurEntree.value = removeDot(petiteList).join("")
  }
}
// pour changer la valeur d'entrée
function displayvaleurEntree(event) {
  event.addEventListener("click", changevaleurEntree);
}
// pour l'equalité
function give_result(event) {
  event.preventDefault();
  preventAlotEqual += 1;
  deroulementMath = 0;
  if (preventAlotEqual > 1) {
    return
  }
  ecrandeCalcul.innerText = `${ecrandeCalcul.innerText} ${valeurEntree.value} =`
  valeurEntree.value = ""
  computation()
}
//fonction log 
function logarithme(event) {
  event.preventDefault(); 
  valeurEntree.value =  Number((valeurEntree.value)) * Number((valeurEntree.value))
} 
logElement.addEventListener('click', logarithme);
// fonction extension
function extension(event) {
    event.preventDefault();
    valeurEntree.value = Number((valeurEntree.value)  *' 3 -(-2.8%)')
 }
//fonction exponatielle
function exponaCirculaire(event) {
    event.preventDefault();
    valeurEntree.value = Number(valeurEntree.value)  * -0.15
}
//fonction pi
function pideCirculaire(event) {
    event.preventDefault();
    valeurEntree.value = Number(valeurEntree.value) * 3.14
}
// pourcentage    % Calcule
function transformInPercent(event) {
  event.preventDefault();
  valeurEntree.value = Number(valeurEntree.value) / 100
}
// operation plus ou moins
function plus_moin() {
  valeurEntree.value = `${valeurEntree.value * (-1)}`
}
ajoutEtSoust.addEventListener("click", plus_moin)
values.forEach((value) => displayvaleurEntree(value));
operators.forEach((operator) => operator.addEventListener("click", () => {
  changeLabelText(event, operator)
}))
extElement.addEventListener("click", extension);
expElement.addEventListener("click", exponaCirculaire);
pieElement.addEventListener("click", pideCirculaire);
symbolEgal.addEventListener("click", give_result);
tansformInPercent.addEventListener("click", transformInPercent);
pourEffacer.addEventListener("click", clearTheInput);
//retourZero.addEventListener("click", clearAll);
retourZero.addEventListener("click", clearAll);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
  
      
      
      
      
      
      
      
      
      
      

