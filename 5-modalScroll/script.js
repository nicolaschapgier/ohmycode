const modal = document.querySelector('.modal-container');
const btn = document.querySelector('.btn-success');
const code = document.querySelector('.code');
const icone = document.querySelector('.fa-times');

// console.log(modal);
// console.log(btn);
// console.log(code);
// console.log(icone);



window.addEventListener('scroll', displayModal);

function displayModal(){
    // console.log('spouew');
    var hauteur = document.documentElement.scrollTop;
    // console.log(hauteur, 'nombre de pixels depuis ke haut de la page');
    if(hauteur > 400){
        modal.style.display ="flex";
    }
}


btn.addEventListener('click', function(){
    // console.log('spouewclick');
    code.style.display ="block";
    btn.style.display ="none";
})


icone.addEventListener('click',function(){
    // console.log('icone cliquée spouew');
    modal.style.display ="none";
    window.removeEventListener('scroll',displayModal);
})

