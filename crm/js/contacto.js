var contactos = [];

function listarContactos(){
	var $listadoTable = $('#listado-contactos');
	var tableVacio = $listadoTable.find('tbody').html();

	if(contactos.length > 0){
		$listadoTable.find('tbody').empty();
	}

	for (var i = 0; i < contactos.length; i++) {
		var contacto = contactos[i];

		var $tr = $('<tr></tr>');
		$tr.append('<td>' + contacto.nombre + '</td>');
		$tr.append('<td>' + contacto.telefono + '</td>');
		$tr.append('<td>' + contacto.email + '</td>');
		$tr.append('<td>' + contacto.compania + '</td>');
		$tr.append('<td>' + contacto.ultimocontacto + '</td>');
		$tr.append('<td>' + '<button data-ind="'+ i +'">Editar</editar> <button data-ind="'+ i +'">Eliminar</editar>' + '</td>');

		$tr.find('button').on('click', function(event){
			var $btnClick = $(event.currentTarget);
			var index = $btnClick.data('ind');
			var action = event.currentTarget.innerText;

			if(action == 'Editar'){
				$('.detalle').slideDown();
				var contacto = contactos[index];
				var inputs = Object.keys(contacto);

				for (var i = 0; i < inputs.length; i++) {
					$('#' + inputs[i]).val(contacto[ inputs[i] ]);
				}

			}else if(action == "Eliminar"){
				contactos.splice(index, 1);
				listarContactos();
			}
		});

		$listadoTable.find('tbody').append($tr);
	}
}


$( function () {
	$.get("datos/contactos.json", function(resp){
		if(resp.length > 0){
			contactos = resp;
		}
		listarContactos();
	});

	$('.detalle').slideUp();
	$('.btn-nuevo').click(function(){
		$('.detalle').slideToggle();
	});

	$('form').on('submit', function(event){
		event.preventDefault();

		var inputs = $('form').serializeArray();
		var contacto = {};

		for (var i = 0; i < inputs.length; i++) {
			contacto[ inputs[i].name ] = inputs[i].value;
			$('#' + inputs[i].name).val('');
		}

		contactos.push(contacto);
		listarContactos();
	})

} );