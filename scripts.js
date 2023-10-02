//Evita el comportamiento por defecto al hacer click. Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página.
let enlaces = document.querySelectorAll('a')
for(let i=0;i<enlaces.length;i++){
enlaces[i].addEventListener('click', function(event){
    event.preventDefault();
});
}

// al hacer clic: Imágenes: Cambia la imagen por uno de los gif que tienes en la carpeta assets con el nombre magic-*.

function cambiarFotos(){
    document.getElementsByClassName("kg-image").src ="./varita-magica/assets/magic-1.gif";
}
document.getElementsByClassName("kg-image").addEventListener("click", cambiarFotos)



