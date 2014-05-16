/**
 * @author psep
 */

/**
 * Lista del paradero con los buses
 */
document.querySelector('#btn-BuscarBus').addEventListener('click', function() {
	var txtParadero = $.trim($('#txtParadero').val().toUpperCase());
	var txtBus = $.trim($('#txtBus').val().toUpperCase());
	
	if (txtParadero == "") {
		$('#txtParadero').val("");
		alert("Debe ingresar paradero");
	} else {
		$('#txtParadero').val(txtParadero);
		getParaderoBusData(txtParadero, txtBus);
		document.querySelector('#listBusqueda').className = 'current';
		document.querySelector('[data-position="current"]').className = 'left';
	}
});
document.querySelector('#btn-listBusqueda-back').addEventListener('click', function() {
	document.getElementById('div-dataParaderos').innerHTML = '';
	document.querySelector('#listBusqueda').className = 'right';
	document.querySelector('[data-position="current"]').className = 'current';
});


/**
 * Mapa paraderos
 */
document.querySelector('#btn-buscaParadero').addEventListener('click', function() {
	loadMapParaderos(-33.443707, -70.650412);
	document.querySelector('#buscaParadero').className = 'current';
	document.querySelector('[data-position="current"]').className = 'left';
});
document.querySelector('#btn-buscaParadero-back').addEventListener('click', function() {
	document.querySelector('#buscaParadero').className = 'right';
	document.querySelector('[data-position="current"]').className = 'current';
});


/**
 * Consulta Bip!
 */
document.querySelector('#btn-consultaBip').addEventListener('click', function() {
	document.querySelector('#consultaBip').className = 'current';
	document.querySelector('[data-position="current"]').className = 'left';
});
document.querySelector('#btn-consultaBip-back').addEventListener('click', function() {
	document.querySelector('#consultaBip').className = 'right';
	document.querySelector('[data-position="current"]').className = 'current';
});


/**
 * Mapa Centros Bip!
 */
document.querySelector('#btn-centrosBip').addEventListener('click', function() {
	document.querySelector('#centrosBip').className = 'current';
	document.querySelector('[data-position="current"]').className = 'left';
});
document.querySelector('#btn-centrosBip-back').addEventListener('click', function() {
	document.querySelector('#centrosBip').className = 'right';
	document.querySelector('[data-position="current"]').className = 'current';
});


/**
 * Términos y condiciones
 */
document.querySelector('#btn-terminosCondiciones').addEventListener('click', function() {
	document.querySelector('#terminosCondiciones').className = 'current';
	document.querySelector('[data-position="current"]').className = 'left';
});
document.querySelector('#btn-terminosCondiciones-back').addEventListener('click', function() {
	document.querySelector('#terminosCondiciones').className = 'right';
	document.querySelector('[data-position="current"]').className = 'current';
});