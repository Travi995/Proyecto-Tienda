// el argumento de est funcion es una rray de objetos\
 
let error = ''
const hacerTarjetas = (arg) => {
    let objetos = arg
    let tarjetaClonada
    let secciones
    let modificado = false
    let botones
    

    objetos.forEach(element => {
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

const cargarEvents = (arg1, arg2) => {
    let objeto  = arg1
    let tarjeta = arg2 
    

    tarjeta.addEventListener('click', () => {
        cargarTarjetaAmpliada(objeto)
        
        document.getElementById('infoCompletaTarjeta').classList.add('showInfoCompleta')
        
    })

    
}

const cargarTarjetaAmpliada = (arg) => {
    let elemento = arg

    document.getElementById('imgMostrar').children[0].setAttribute('src', elemento.image)
    
    document.getElementById('tituloMostrar').textContent      = elemento.title
    document.getElementById('categoriaMostrar').textContent   = elemento.category
    document.getElementById('descripcionCompletaMostrar').textContent = elemento.description
    document.getElementById('precioMostrar').textContent      = elemento.price
}


const removerVistaAmpliadaProducto = () => {
    document.getElementById('infoCompletaTarjeta').classList.remove('showInfoCompleta')
}