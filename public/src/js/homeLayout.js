// ela rgumento de est funcion es una rray de objetos\
let error = ''
const hacerTarjetas = (arg) => {
    let objetos = arg
    let tarjetaClonada
    let secciones
    let modificado = false

    objetos.forEach(element => {
        if (modificado === true){
            tarjetaClonada = document.getElementById('homeLayout').children[0].cloneNode(true)
            secciones = Array.from(tarjetaClonada.children)
        } else {
            tarjetaClonada = document.getElementById('homeLayout').children[0]
            secciones = Array.from(tarjetaClonada.children)
            modificado = true
        }
        secciones[0].children[0].setAttribute('src', './assets/media/imgs/fondos/background-44-1920x1024.jpg')/*aki el segundo parametro de este metodo es element.imagen */
        secciones[1].children[0].textContent = element.nombre
        secciones[1].children[1].textContent = element.descripcion
        secciones[1].children[2].textContent = element.provinciaVendedor
        secciones[1].children[3].textContent = element.precio
        

        document.getElementById('homeLayout').appendChild(tarjetaClonada)

        error = secciones[1]
    });

}

const cargarEvents = (arg) => {
    let elemento = arg
    let nuevoNodo = HTMLDivElement

    nuevoNodo = document.createElement('div')
    
    nuevoNodo.classList.add('ampliarTarjeta')

    elemento.addEventListenner('click', () => {
        
    })
}