
const cargarDesplegableopciones = () => {

    document.getElementById('abrirBarraLateral').addEventListener('click', () => {
        
        document.getElementById('barraLateral').classList.add('showBarraLateral')
    })

    document.getElementById('btnCerrarBarraLateral').addEventListener('click', () => {
        document.getElementById('barraLateral').classList.remove('showBarraLateral')
    })
    
    document.getElementById('addProducto').addEventListener('click', (event) => {
        manejarEventosBarraDesplegable(event)
    })

}

const manejarEventosBarraDesplegable = (event) => {
    let elemento = event.target

    switch (elemento.getAttribute('id')) {
        case 'addProducto':
            if (!document.getElementsByClassName('formActivo')[0]) {
                anadirProducto()
            } else {
                document.getElementById('formAddProducto').parentNode.style.display = 'block'
            }
            break;
    }

}
