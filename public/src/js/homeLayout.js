// el argumento de est funcion es una rray de objetos\
 

const hacerTarjetas = (arg) => {
    let objetos = arg.slice(0,3)
    let tarjetaClonada
    let secciones
    let modificado = false
    let botones
    


    objetos.forEach((element) => {
        
        if (modificado === true){
            tarjetaClonada = document.getElementById('homeLayout').children[0].cloneNode(true)
            secciones = Array.from(tarjetaClonada.children)
        } else {
            tarjetaClonada = document.getElementById('homeLayout').children[0]
            secciones = Array.from(tarjetaClonada.children)
            modificado = true
        }

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
        
        document.getElementById('homeLayout').appendChild(tarjetaClonada)

        
    });

    botones = document.getElementById('infoCompletaTarjeta').children[2]
    
    botones.children[0].addEventListener('click', () => {
        
        removerVistaAmpliadaProducto()
    })
}

