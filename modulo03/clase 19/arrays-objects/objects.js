var contactos = [
	{ 
		nombre: "Pedro",
		nota: 3,
		aprobado: false
	},
	{ 
		nombre: "Hugo",
		nota: 6,
		aprobado: true
	},
	{ 
		nombre: "Angela",
		nota: 2,
		aprobado: false
	},
	{ 
		nombre: "Martha",
		nota: 7,
		aprobado: true
	}
];

for(var i = 0; i < contactos.length; i++){
	document.write( '<li>' + contactos[i].nombre + '</li>' );
}
