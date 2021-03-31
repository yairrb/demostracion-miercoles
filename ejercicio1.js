

/*
TIPOS DE VARIABLES EN JS:
*VAR
*LET
*CONST
A continuacion hacemos un input desde el explorador:
var  numero = parseInt(prompt("ingrese un numero ", 0)) ; 
*/


for ( var i = 1 ; i <= 10 ; i++ ){
    console.log(i);
}

//JSON javascript object notation

var persona = {
    nombre: "Yair",
    apellido: "Ruiz",
    edad: 25
}

var perro = {
    nombre: "firulais",
    raza: "pitbull"
}

function mostrarPersonaPorConsola( valorPersona ){
    console.log(valorPersona.nombre);
}

persona.codigoPostal = 1234;
persona.calle = "calle 123";

persona.saludar = function() {
    console.log("Saludos!!")
}


mostrarPersonaPorConsola(perro);

persona.saludar();

function mostrarPorConsola( numero1, numero2, funcion1, funcion2){
    console.log("resultado de la primer funcion: " + funcion1(numero1, numero2) );
    console.log("resultado de la segunda funcion: " + funcion2(numero1, numero2) );
}
function suma(v1, v2) {
     return v1 + v2
    } 

    function multiplicacion(v1,v2) {
         return v1 * v2
        }

mostrarPorConsola(1, 2 ,suma, multiplicacion);