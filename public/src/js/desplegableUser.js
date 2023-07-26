
const cargarEventsUser = () => {
    
    document.getElementById('iconoUsuario').addEventListener('focus', () => {
        document.getElementById('desplegableUser').classList.add('showDesplegableUser')
        console.log('el foco se ha disparado')
    })
    
    document.getElementById('desplegableUser').addEventListener('mouseleave', () => {

        document.getElementById('desplegableUser').classList.remove('showDesplegableUser')
    })
}


window.onload = () => {
    cargarEventsUser()
    cargarDesplegableopciones()
}