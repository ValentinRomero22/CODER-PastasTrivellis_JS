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

const izquierda = () =>{
    let carruselIzquierda = document.querySelectorAll(".carrusel-imagen")
    let ultimaImagenSeleccionada = carruselIzquierda[carruselIzquierda.length - 1]
    carrusel.style.marginLeft = "0%"
    carrusel.style.transition = "all 0.5s"

    setTimeout(() =>{
        carrusel.style.transition = "none"
        carrusel.insertAdjacentElement('afterbegin', ultimaImagenSeleccionada)
        carrusel.style.marginLeft = "-100%"
    }, 500)
}

botonIzquierda.addEventListener('click', izquierda)

cargarRecomendados()

function cargarRecomendados(){
    fetch("./json/recomendados.json")
        .then(respuesta => respuesta.json())
        .then(datos => listarRecomendados(datos))
}

function listarRecomendados(datos){
    for(dato of datos){
        let {id, descripcion, detalle, precio, imagen} = dato
        
        producto = {id: id, descripcion: descripcion, detalle: detalle, precio: precio, imagen: imagen}
        _productos.push(producto)
        
        recomendados.innerHTML +=   "<article class='producto'>" +
                                    "<img class='imagen-producto' src='./" + imagen + "'alt='Imagen'></img>" +
                                    "<div class='info-producto'>" + 
                                        "<div class='nombre-producto'>" +
                                            "<h3>" + descripcion + "</h3>" +
                                        "</div>" + 
                                        "<div class='precio-producto'> " + 
                                            "<p class='detalle'>" + detalle +" </p>" +
                                            "<p>$" + precio + "</p>" + 
                                        "</div>" +
                                        "<div class='comprar-producto'>" + 
                                            "<input value='Agregar al carrito' type='submit' id='comprar' onclick='agregarItem(" + id + ")'>" +
                                        "</div>" +
                                    "</div>" +
                                "</article>"                            
    }
}

function agregarItem(id){
    if(localStorage.getItem("items") != null)
        _items = JSON.parse(localStorage.getItem("items"))
        
    producto = _productos[id - 1]
    item = {producto: producto, cantidad: 0}
    _items.push(item)
    localStorage.setItem("items", JSON.stringify(_items))
 
    mostrarConfirmacion("Producto agregado al carrito")
} 
