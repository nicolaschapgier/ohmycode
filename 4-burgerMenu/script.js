// const modal = document.querySelector('.modal')
// const icone = document.querySelector('.navbar-mobile i')

// modal.addEventListener('click', function(){
//     console.log('modal');
// })

// icone.addEventListener('click', function(){
//     console.log("spouew l'icone");
//     modal.classList.toggle('change-modal');
//     icone.classList.toggle('fa-times');
// });


const icone = document.querySelector('.navbar-mobile i');
const modal = document.querySelector('.modal');
console.log(icone);
console.log(modal);

icone.addEventListener('click', function(){
    console.log('spouew');
    modal.classList.toggle('change-modal');
    icone.classList.toggle('fa-times');

})