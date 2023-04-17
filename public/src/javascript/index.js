// creacion de la ventana desplegable del icono de usuario
const icono = document.getElementById('icon_user')
icono.addEventListener('click', () => {
    icono.style.marginInlineEnd = '20px'
    icono.style.filter          = 'drop-shadow(0 0 5px rgba(255, 255, 255, 0.896))'
    let mostrar = document.getElementById('user_emergente')
    mostrar.style.display       = 'flex'
})

/*const inicio = document.getElementById('inicio')
inicio.addEventListener('click',()=>{
    let mostrar = document.getElementsByClassName('inicializacion')
    mostrar.style.display= 'flex'
})*/
