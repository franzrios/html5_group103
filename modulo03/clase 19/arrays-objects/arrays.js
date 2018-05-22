// Multiples variables (No Array)
var nombre1 = "Pedro";
var nombre2 = "Hugo";
var nombre3 = "Angela";
var nombre4 = "Martha";

	function saludar(nombre){
		return "Hola: " + nombre;
	}

saludar(nombre1);
// ... nombreX
saludar(nombreX);

// Multiples variables (Array)
var contactos = ["Pedro", "Hugo", "Angela", "Martha"];
var resultados = [3,6,2,7];
var aprobados = [true, true, false, true];

var informe = ["Carla", 6, true];
var conteoNombres = function (nombre, index) {
	console.log( saludar(nombre) );
	return saludar(nombre);
}

contactos.length // 4 (cantidad de elementos en el array)
contactos.map(conteoNombres); // Callbacks

// Leer cada item del array por el indice
resultados[4] //7

// Asignar un nuevo valor a un indice específico
resultados[1] = 10;

// Para insertar un nuevo elemento al array:
contactos.push("Clara")

// Para eliminar el último valor del array:
contactos.pop()

// Para eliminar un item del array por el indice:
contactos.shift(1)

// Para cortar parte del array:
contactos.slice(0,2) ó contactos.splice(3, 1) 

// Para ordenar por textos se usa la función:
contactos.sort() // Ordena de A-Z
