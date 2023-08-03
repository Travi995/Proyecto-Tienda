let error = ''
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

    document.getElementById('subirProducto').previousElementSibling.addEventListener('click', (event) => {
        
        manejarEventosBarraDesplegable(event)
    })

    document.getElementById('subirProducto').addEventListener('click', (event) => {
        manejarEventosBarraDesplegable(event)
        
  })

}

const manejarEventosBarraDesplegable = (event) => {
    let elemento = event.target
    let objeto = {}

    switch (elemento.getAttribute('id')) {
        case 'addProducto':
            if (!document.getElementsByClassName('formActivo')[0]) {
                anadirProducto()
            } else {
                document.getElementById('formAddProducto').parentNode.style.display = 'block'
            }
            break;
        
        case 'cancelAnnadir':
            event.preventDefault()
            
            document.getElementById('formAddProducto').parentNode.style.display = 'none'

            break
        
        case 'subirProducto':
            event.preventDefault()
            let elementosFormulario = Array.from(document.getElementById('formAddProducto').children)

            elementosFormulario.forEach(element => {
                
                objeto[element.children[0].getAttribute('name')] = element.children[1].value
            });

            console.log(objeto)
            
            
            document.getElementById('formAddProducto').parentNode.style.display = 'none'






            break
    }

}
