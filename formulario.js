

$(document).ready(function(){
    
    var botonExit = $("#salir");

    var usuario = localStorage.getItem('nombreUsuario');

    if ( usuario != null ){


        $("#saludo").append("Bienvenido " + usuario)

        $("#login").hide()
        $("#noLogueado").hide();
        
    }else {
        $("#salir").hide();
    }





    botonExit.click( function() {
        localStorage.removeItem('nombreUsuario');
        localStorage.clear();
        location.reload();
    });


});

function saludar() {
    var nombre = $("#nombre").val();
    localStorage.setItem('nombreUsuario',nombre )
    location.reload();
}

