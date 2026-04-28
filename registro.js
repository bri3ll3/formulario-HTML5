var registro, password1, password2, fechaInicio, registroSubmit;

function validarPasswords() {
	if (password1.value !== password2.value) {
		password2.setCustomValidity('Las passwords deben coincidir');
	} 
}


function enviar(evento) {
	evento.preventDefault();

	fechaInicio.setCustomValidity('');
	if (fechaInicio.value) {
		var fechaActual = new Date();
		fechaActual.setHours(0, 0, 0, 0);
		var fechaIni = new Date(fechaInicio.value);
		if (fechaIni < fechaActual) {
			fechaInicio.setCustomValidity('La fecha debe ser igual o posterior a hoy');
		}
	}


	validarPasswords();

	if (registro.checkValidity()) {
		registro.submit();
	}
}


function iniciar() {
	registro       = document.getElementById('registro');
	password1      = document.getElementById('password1');
	password2      = document.getElementById('password2');
	fechaInicio    = document.getElementById('fechaInicio');
	registroSubmit = document.getElementById('registro-submit');

	password1.addEventListener('input', validarPasswords, true);
	password2.addEventListener('input', validarPasswords, true);
	registroSubmit.addEventListener('click', enviar, true);
}

window.addEventListener('load', iniciar, true);
