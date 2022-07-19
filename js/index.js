const carrusel = document.getElementById("carrusel")
let carruselImagen = document.querySelectorAll(".carrusel-imagen")
let ultimaImagen = carruselImagen[carruselImagen.length -1]

const botonDerecha = document.getElementById("botonDerecho")
const botonIzquierda = document.getElementById("botonIzquierdo")

carrusel.insertAdjacentElement('afterbegin', ultimaImagen)

const derecha = () =>{
    let primeraImagen = document.querySelectorAll(".carrusel-imagen")[0]
    carrusel.style.marginLeft = "-200%"
    carrusel.style.transition = "all 0.5s"

    setTimeout(() =>{
        carrusel.style.transition = "none"
        carrusel.insertAdjacentElement('beforeend', primeraImagen)
        carrusel.style.marginLeft = "-100%"
    }, 500)
}

botonDerecha.addEventListener('click', derecha)

