
const productosVenta = (arg) => {
    let objetos = arg
    let tarjetaClonada 
    let secciones
    let botones

    objetos.forEach(element => {
        
        tarjetaClonada = document.getElementsByClassName('tarjeta')[0].cloneNode(true)
        secciones = Array.from(tarjetaClonada.children)

        if (element.title.length>15) {
            element.title = element.title.slice(0,15)            
        }

        tarjetaClonada.setAttribute('id',element.id)
        secciones[0].children[0].setAttribute('src', element.image)
        secciones[1].children[0].textContent = element.title
        secciones[1].children[1].textContent = 'click here for more description'
        secciones[1].children[2].textContent = element.category
        secciones[1].children[3].textContent = element.price
        
        cargarEvents(element, tarjetaClonada)
        
        document.getElementById('productosLayout').appendChild(tarjetaClonada)

    });


}