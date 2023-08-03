

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