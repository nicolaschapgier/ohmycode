var btnSuccess = document.querySelector('.btn-success');
var cookies = document.querySelector('.cookies');


console.log(btnSuccess);
console.log(cookies);

cookies.addEventListener('click', function(){
    console.log("spouew c'est invisible");
    cookies.style.opacity = "0";
})