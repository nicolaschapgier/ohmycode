// console.log("spouew");

let titre = document.getElementById('titre');
titre.style.color ="green";
// titre = 2
// console.log(titre);

// let score = 0;
// console.log(score, "initialisation");

// score = score+1;
// console.log(score, "après addition");

// const mot1 = "Hello";
// const mot2 = "world !";
// const phrase = mot1 + " " + mot2;
// console.log(phrase);

// let calcul = 0;
// calcul = calcul +1;
// console.log(calcul);


//je séléctiionne le cercle

const btnRed = document.getElementById('btn-red');
var compteur = 0


console.log(btnRed, "bouton rouge");
btnRed.addEventListener('click',function (){
    // console.log('spouew');
    add();
})


const btnBlue = document.getElementById('btn-blue');
btnBlue.addEventListener('click', function(){
    add();
})

function add(){
    compteur = compteur + 1;
    console.log(compteur, 'après incrémentation');
    titre.innerText = compteur;
}


var chrono = document.getElementById('chrono')

setTimeout(function(){
    btnRed.remove();
    btnBlue.remove();
    // console.log('fin du chrono');
    chrono.innerText = ("Votre score " + compteur);
    titre.remove();
}, 5000);

var reload = document.getElementById('recommencer');
reload.addEventListener('click', function (){
//   console.log('spouew');
    location.reload()
})

