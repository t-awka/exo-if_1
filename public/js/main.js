// 1
console.log(1=="1");
// 2
console.log(1==="1");
// 3
let prenom = prompt("votree prénom");
if(prenom.length < 5){
    alert("votre nom est trop court");
}
// 4
let addition = prompt("2+2=?");
if(addition == 4){
    alert("bonne réponse")
}
else{
    alert("vous être le maillon faible...")
}
// 5
let multi = prompt("2 x 2 = ?");
if(multi == 4){
    alert("la reponse était bien" + multi);
}
else{
    alert("c'est dommage, tu n'étais qu'a " + Math.abs(4 - multi) + " unités de la bonne réponse");
}
// 6
let tableau = [];
let q1 = prompt("ecrit un truc");
let q2 = prompt("ecrit un autre truc");
let q3 = prompt("ecrit encore un truc");
tableau.push(q1, q2, q3);
if(tableau.length == 3){
    alert(tableau);
}
// 7
let grandNombres = [];
let petitNombres = [];
let chiffres1 = prompt('Votre chiffre');
let chiffres2 = prompt('Votre chiffre');

if (chiffres1 >= 12 && chiffres2 >= 12) {
    grandNombres.push(chiffres1, chiffres2);
} else if (chiffres1 < 12 && chiffres2 < 12) {
    petitNombres.push(chiffres1, chiffres2);
} else if (chiffres1 >= 12 && chiffres2 < 12) {
    grandNombres.push(chiffres1);
    petitNombres.push(chiffres2);
} else {
    grandNombres.push(chiffres2);
    petitNombres.push(chiffres1);
}

alert(`votre bac contient ${grandNombres} et ${petitNombres}`);
