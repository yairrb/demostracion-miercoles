

// CUANDO EL DOM ESTA COMPLETAMENTE CARGADO
$(document).ready( function() {


    var caja = $("#caja");

    var botonVerde = $("#verde");

    botonVerde.click( function() {
        caja.css('background', 'green')
    })

    $("#rojo").click(function() {
        caja.css('background', 'red')
    });
    
    console.log(caja);




});