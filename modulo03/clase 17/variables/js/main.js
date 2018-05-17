/*
Comentario
Multilinea
*/

// Comentario una linea

// alert("Hola Mundo - Externo");
// document.write("Hola Mundo - Navegador");

// VARIABLES:
var numero1 = 20;
numero1 = 18;

document.write(numero1);

console.log("Mi edad es:", numero1);

/*
	NOMBRES DE VARIABLES
		ALFANUMÉRICOS: a-z 0-9
		_ (NO -)
		$

		(CAMELCASE)
		- nombreAlumno
		- nombreCompletoAlumno

		- nombre_alumno
		- _nombre
		- $objeto
*/

// VARIABLE TIPO CADENA (STRING)
var pruebaString = '20';
var pruebaString2 = "Variable String";

// VARIABLE TIPO NUMÉRICO
var pruebaNumber = 20;
var pruebaNumber2 = 0.0005;
var pruebaNumber2 = -0.305;

// VARIABLE TIPO VERDADERO/FALSO (BOOLEAN)
var estaPrendido = true;
var estaPrendido = false;

// VARIABLE TIPO FUNCIÓN
var gritar = function(){
	var jugador = "Messi";
	// var golNumero = 2;

	alert("GOOOOOOLLLLLLL!!!!!!!");
	alert("De");
	alert(jugador);
	alert("Es su gol numero");
	alert( sumar(5, 2) );
}
// gritar();


// OPERADORES NUMÉRICOS
// +, -, *, /

// REFERENCIA++ = REFERENCIA + 1;
// REFERENCIA-- = REFERENCIA - 1;
// REFERENCIA += 100; REFERENCIA = REFERENCIA + 100;
// REFERENCIA -= 100; REFERENCIA = REFERENCIA - 100;
// REFERENCIA *= 100; REFERENCIA = REFERENCIA * 100;
// REFERENCIA /= 100; REFERENCIA = REFERENCIA / 100;


function sumar(numeroA, numeroB){
	var resultado = numeroA + numeroB;
	return resultado;
}

function restar(numeroA, numeroB){
	return numeroA - numeroB;
}

function multiplicar(numeroA, numeroB){
	return numeroA * numeroB;
}

function dividir(numeroA, numeroB){
	return numeroA / numeroB;
}

// Operadores para cadenas
var saludo = "Hola: ";
var nombre = "Jorge";
var saludoCompleto = saludo + nombre;



