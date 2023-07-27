
const cargarEventsUser = () => {
    
    document.getElementById('iconoUsuario').addEventListener('focus', () => {
        document.getElementById('desplegableUser').classList.add('showDesplegableUser')
        
    })
    
    document.getElementById('desplegableUser').addEventListener('mouseleave', () => {

        document.getElementById('desplegableUser').classList.remove('showDesplegableUser')
    })

  

}


