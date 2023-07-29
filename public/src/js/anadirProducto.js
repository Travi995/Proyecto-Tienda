
const anadirProducto = () => {
    let cuerpo = HTMLDivElement
    cuerpo = document.createElement('div')

    cuerpo.classList.add('addproducto')
    cuerpo.classList.add('formActivo')


    document.getElementById('formAddProducto').style.display = 'block'
    cuerpo.appendChild(document.getElementById('formAddProducto'))
    
    document.body.appendChild(cuerpo)
    cargarEventosAddProduct()
}

const cargarEventosAddProduct = () => {
    document.getElementsByClassName('cancelar')[0].addEventListener('click', (event) => {
        event.preventDefault()
        document.getElementById('formAddProducto').parentNode.style.display= 'none'
    })
    
}