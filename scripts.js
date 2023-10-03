//Evita el comportamiento por defecto al hacer click. Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página.
let enlaces = document.querySelectorAll('a')
for(let i=0;i<enlaces.length;i++){
enlaces[i].addEventListener('click', function(event){
    event.preventDefault();
});
}

// al hacer clic: Imágenes: Cambia la imagen por uno de los gif que tienes en la carpeta assets con el nombre magic-*.

function cambiarFotos(event){
   event.target.src = getRandom(randomGif);
}
let fotos = document.getElementsByTagName("img")
for(let i=0; i<fotos.length; i++){
 fotos[i].addEventListener("click", cambiarFotos)
}


//al hacer clic: Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.

 let parrafos = document.querySelectorAll("p")
 
 for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].addEventListener("click", function(){
        parrafos[i].style.color = getRandom(colors);
        parrafos[i].style.backgroundColor = getRandom(colors);
    })
}


//al hacer clic: Bloques de article o section: Cambia el color de fondo.

let article = document.querySelectorAll("article")
let section = document.querySelectorAll("section")
 
for (let i = 0; i < article.length; i++) {
   article[i].addEventListener("click", function(){
       article[i].style.backgroundColor = getRandom(colors);
       section[i].style.backgroundColor = getRandom(colors);
   })
}


 //al hacer mouseover: Imágenes: Cambia la imagen por el gif abracadabra.gif.

 function abracadabraFotos(img){
    img.target.src = "assets/abracadabra.gif"
 }
 for(let i=0; i<fotos.length; i++){
  fotos[i].addEventListener("mouseover", abracadabraFotos)
 }


 //al hacer mouseover:Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.
 for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].addEventListener("mouseover", function(){
        parrafos[i].style.color = getRandom(colors);
        parrafos[i].style.backgroundColor = getRandom(colors);
    })
}

 //al hacer mouseover: Bloques de article o section: Color de fondo distinto al de párrafo.

 for (let i = 0; i < article.length; i++) {
    article[i].addEventListener("mouseover", function(){
        article[i].style.backgroundColor = getRandom(colors);
        section[i].style.backgroundColor = getRandom(colors);
    })
 }

//Premium:
 //Crea una función de nombre getRandom que acepte un array con valores y devuelva uno de ellos de manera aleatoria.
const colors = ["#005F73", "#0A9396", "#94D2BD", "#E9D8A6", "#EE9B00", "#CA6702", "#BB3E03", "#AE2012", "#9B2226"]
const randomGif = ["assets/magic-2.gif", "assets/magic-3.gif", "assets/magic-4.gif", "assets/magic-5.gif", "assets/magic-6.gif" ]

const getRandom = (array) => {
    let aleatorio = array[Math.floor(Math.random()*array.length)]
    return aleatorio
}


//Utiliza la función creada getRandom para utilizar colores aleatorios de una paleta que hayas escogido de coolors.co en los apartados anteriores.

//Utiliza la función creada getRandom para utilizar gifs aleatorios en los apartados anteriores.