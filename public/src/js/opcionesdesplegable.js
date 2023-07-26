
const cargarDesplegableopciones = () => {

    document.getElementById('abrirBarraLateral').addEventListener('click', () => {
        
        document.getElementById('barraLateral').classList.add('showBarraLateral')
    })

    document.getElementById('cerrarBarraLateral').addEventListener('click', () => {
        document.getElementById('barraLateral').classList.remove('showBarraLateral')
    })
    
}




/*asumiendo k el boton tiene un id llamado miBtn */

// document.getElementById('miBtn').style.backgroundImage = 'url'
 /*donde dice url se pone la direccion de la imagen si te ekivocas en la url de la imagen obviamente 
 no va a salir nada esta es una via por asi decirlo la mas corta pero expensa a errores  */











