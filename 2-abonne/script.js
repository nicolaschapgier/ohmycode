const icone = document.querySelector('i');
console.log(icone);

icone.addEventListener('click',function(){
    console.log('spouew');
    icone.classList.toggle('fa-smile-wink');
    icone.classList.toggle('happy');
}) //ajouté dans le bouton abonnez-vous.

const btnButton = document.querySelector('.btn')
console.log(btnButton);

btnButton.addEventListener('click',function(){
    // console.log('spouew2');
   
    btnButton.classList.toggle('abonne');

    if(btnButton.innerText === "Abonné"){
        btnButton.innerText = "Abonnez-vous";
    }else{
        btnButton.innerText = "Abonné";
    };

    icone.classList.toggle('fa-smile-wink');
    icone.classList.toggle('happy');
})