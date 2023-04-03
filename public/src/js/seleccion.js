opcion = document.getElementById("seleccionar")

function EleccionPagina(){
    let valor = 0
    valor = opcion.value
    
    if (valor =="1"){
        window.location.href = "./vendedor.html"
        return 
    }
    if (valor == "2") {
        alert("estas eligiendo la segunda opcion")
    } else {
        alert("elije una opcion ")
        
    }   
}

function Atras (){
    window.location.href = "./inicio.html"
}

document.getElementById("adelante").onclick = EleccionPagina
document.getElementById("atras").onclick    = Atras
