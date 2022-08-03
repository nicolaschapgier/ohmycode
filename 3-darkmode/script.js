var switchBox = document.querySelector('.switch');
var btn = document.querySelector('.btn');
var icone = document.querySelector('i');
var container = document.querySelector('.container');
var titre = document.querySelector('h1');

var up = document.querySelector('.fa-angle-up');
var down = document.querySelector('.fa-angle-down');

console.log(switchBox);
console.log(btn);
console.log(icone);
console.log(container);
console.log(titre);
console.log(up);
console.log(down);



switchBox.addEventListener('click', function (){
    // console.log('spouew');
    btn.classList.toggle('btn-change')
    icone.classList.toggle('icone-change')
    icone.classList.toggle('fa-sun')
    switchBox.classList.toggle('switch-change')
    container.classList.toggle('container-change')

    if (titre.innerText === "DARK MODE") {
        titre.innerText = "LIGHT MODE";
    }else{
        titre.innerText = "DARK MODE";
    }
        
    }
)



up.addEventListener('click',function(){
    console.log('spouewup');
    titre.style.fontSize =(60 + 'px');
})

down.addEventListener('click',function(){
    console.log('spouewdown');
    titre.style.fontSize =(20 + 'px');
    
})