//Evita el comportamiento por defecto al hacer click. Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página.
let enlaces = document.querySelectorAll('a')
for(let i=0;i<enlaces.length;i++){
enlaces[i].addEventListener('click', function(event){
    event.preventDefault();
});
}