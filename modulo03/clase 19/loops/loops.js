for(inicio; condicional; siguiente){
	repetir();
}

// Ejemplo 1

for(var i = 0; i < 10; i++){
	console.log(i);
}

var contactos = ["Pedro", "Hugo", "Angela", "Martha"];
var resultados = [3,6,2,7];
var aprobados = [true, true, false, true];


for(var i = 0; // Inicio
	i < contactos.length; // Condicioal
	i++ // Siguiente 
	){
	console.log(
		contactos[i],
		resultados[i],
		aprobados[i]
	);
}
