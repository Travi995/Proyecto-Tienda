

const cargar_efecto_menu = () => {
    let elementos = Array.from(document.getElementById('menuNavegacion').children)

    elementos.forEach(element => {
        element.addEventListener('click', () => {
        
            document.querySelector('img.activo').classList.remove('activo')

            element.children[0].classList.add('activo')
            cambiarLayouts(element)
        })
    });
}