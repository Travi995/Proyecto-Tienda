let miError =  ''
const cambiarLayouts = (arg) => { 
    let elementoNavBar = arg
    let elementosCuerpo = Array.from(document.getElementById('cuerpoPagina').children)

    try {
        removerVistaAmpliadaProducto()
    } catch (error) {
        console.log('la vista ampliada no estaba activada')
    }
    
    miError = elementosCuerpo
    switch (elementoNavBar.getAttribute('id')) {
        
        case 'home':

            document.querySelector('.showLayout').classList.remove('showLayout')
            elementosCuerpo[0].classList.add('showLayout')  
            break;
        
        case 'misProductos':
            // el 1 es la vista ampliada de la tarjeta de producto k es un componente del cuerpo
            document.querySelector('.showLayout').classList.remove('showLayout')
            elementosCuerpo[2].classList.add('showLayout')  
            break;
        
        case 'buscar':

            document.querySelector('.showLayout').classList.remove('showLayout')
            elementosCuerpo[3].classList.add('showLayout')  
            break;
        
        case 'productosVenta':

            document.querySelector('.showLayout').classList.remove('showLayout')
            elementosCuerpo[4].classList.add('showLayout')  
            break;
        
        case 'favoritos':

            document.querySelector('.showLayout').classList.remove('showLayout')
            elementosCuerpo[5].classList.add('showLayout')  
            break;
    }    
}








/*

element.addEventListener('click', () => {
            
                
    document.querySelector('.showLayout').classList.remove('showLayout')
    element.classList.add('showLayout')  
})*/