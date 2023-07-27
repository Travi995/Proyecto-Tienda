const iniciarSesionUsuario = () => {
    
    document.getElementById('registro').addEventListener('click', () => {
        console.log('el evento del registro se disparo')
        document.getElementById('registrarUsuario').classList.add('showForm')
        document.getElementById('iniciarUsuario').classList.remove('showForm')
        
    })




}