
const cargarDesplegableopciones = () => {

    document.getElementById('abrirBarraLateral').addEventListener('click', () => {
        
        document.getElementById('barraLateral').classList.add('showBarraLateral')
    })

    document.getElementById('cerrarBarraLateral').addEventListener('click', () => {
        document.getElementById('barraLateral').classList.remove('showBarraLateral')
    })
    
    document.getElementById('addProducto').addEventListener('click', () => {
        if (!document.getElementsByClassName('formActivo')[0]) {
          anadirProducto()  
        } else {
            document.getElementById('formAddProducto').parentNode.style.display='block'
        }
    })

}


