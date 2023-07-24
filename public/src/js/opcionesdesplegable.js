
const cargarHeader = () => {

    document.getElementById('abrirBarraLateral').addEventListener('click', () => {
        
        document.getElementById('barraLateral').classList.add('showBarraLateral')
    })

    document.getElementById('cerrarBarraLateral').addEventListener('click', () => {
        document.getElementById('barraLateral').classList.remove('showBarraLateral')
    })
    
}

window.onload = cargarHeader