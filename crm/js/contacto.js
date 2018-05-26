$(function () {


	$('form').on('submit', function(event){
		event.preventDefault();

		var inputs = $('form').serializeArray();
		var contacto = {};

		for (var i = 0; i < inputs.length; i++) {
			contacto[ inputs[i].name ] = inputs[i].value;
			$('#' + inputs[i].name).val('');
		}

		var $tr = $('<tr></tr>');
		$tr.append('<td>' + contacto.nombre + '</td>');
		$tr.append('<td>' + contacto.telefono + '</td>');
		$tr.append('<td>' + contacto.email + '</td>');
		$tr.append('<td>' + contacto.compania + '</td>');
		$tr.append('<td>' + contacto.ultimocontacto + '</td>');

		$tr.appendTo('table tbody');
	})
});