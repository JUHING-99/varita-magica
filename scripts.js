//Evita el comportamiento por defecto al hacer click. Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página.
let enlaces = document.querySelectorAll('a')
for(let i=0;i<enlaces.length;i++){
enlaces[i].addEventListener('click', function(event){
    event.preventDefault();
});
}

// al hacer clic: Imágenes: Cambia la imagen por uno de los gif que tienes en la carpeta assets con el nombre magic-*.

function cambiarFotos(event){
   event.target.src = "assets/magic-1.gif"
}
let fotos = document.getElementsByTagName("img")
for(let i=0; i<fotos.length; i++){
 fotos[i].addEventListener("click", cambiarFotos)
}


//al hacer clic: Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.

 let parrafos = document.querySelectorAll("p")
 
 for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].addEventListener("click", function(){
        parrafos[i].style.color = "white";
        parrafos[i].style.backgroundColor = "black";
    })
}


//al hacer clic: Bloques de article o section: Cambia el color de fondo.

let article = document.querySelectorAll("article")
let section = document.querySelectorAll("section")
 
for (let i = 0; i < article.length; i++) {
   article[i].addEventListener("click", function(){
       article[i].style.backgroundColor = "purple";
       section[i].style.backgroundColor = "lightblue";
   })
}


 //al hacer mouseover: Imágenes: Cambia la imagen por el gif abracadabra.gif.

 function abracadabraFotos(event){
    event.target.src = "assets/abracadabra.gif"
 }
 for(let i=0; i<fotos.length; i++){
  fotos[i].addEventListener("mouseover", abracadabraFotos)
 }


 //al hacer mouseover:Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.
 for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].addEventListener("mouseover", function(){
        parrafos[i].style.color = "red";
        parrafos[i].style.backgroundColor = "yellow"
    })
}

 //al hacer mouseover: Bloques de article o section: Color de fondo distinto al de párrafo.

 for (let i = 0; i < article.length; i++) {
    article[i].addEventListener("mouseover", function(){
        article[i].style.backgroundColor = "orange";
        section[i].style.backgroundColor = "beige";
    })
 }

//Premium:
 //Crea una función de nombre getRandom que acepte un array con valores y devuelva uno de ellos de manera aleatoria.
 const colors = ['red', 'blue', 'green']

const getRandom = (array) => {
    /* código misterioso */
}

console.log(getRandom(colors))
// imprime 'red', 'blue' o 'green'



//Utiliza la función creada getRandom para utilizar colores aleatorios de una paleta que hayas escogido de coolors.co en los apartados anteriores.



//Utiliza la función creada getRandom para utilizar gifs aleatorios en los apartados anteriores.