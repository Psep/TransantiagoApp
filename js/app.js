/**
 * @author psep
 */

var validaFlujo = false;

/**
 * Lista del paradero con los buses
 */
document.querySelector('#btn-BuscarBus').addEventListener('click', function() {
	var txtParadero = $.trim($('#txtParadero').val().toUpperCase());
	var txtBus = $.trim($('#txtBus').val().toUpperCase());
	validaFlujo = false;
	
	if (txtParadero == "") {
		$('#txtParadero').val("");
		alert("Debe ingresar paradero");
	} else {
		$('#txtParadero').val(txtParadero);
		loadParadero(txtParadero, txtBus, false);
	}
});
document.querySelector('#btn-listBusqueda-back').addEventListener('click', function() {
	document.getElementById('div-dataParaderos').innerHTML = '';
	document.querySelector('#listBusqueda').className = 'right';
	document.querySelector('[data-position="current"]').className = 'current';
	
	if (validaFlujo == true){
		document.querySelector('#buscaParadero').className = 'current';
		document.querySelector('[data-position="current"]').className = 'left';
	}
	
});

/**
 * Carga paraderos
 * @param String
 * @param String
 * @param boolean
 */
function loadParadero(txtParadero, txtBus, isMapa) {
	getParaderoBusData(txtParadero, txtBus);
	
	if (isMapa == true){
		validaFlujo = true;
		document.querySelector('#buscaParadero').className = 'right';
		document.querySelector('[data-position="current"]').className = 'current';
	} 
	
	document.querySelector('#listBusqueda').className = 'current';
	document.querySelector('[data-position="current"]').className = 'left';
}


/**
 * Mapa paraderos
 */
document.querySelector('#btn-buscaParadero').addEventListener('click', function() {
	document.querySelector('#buscaParadero').className = 'current';
	document.querySelector('[data-position="current"]').className = 'left';
	loadMapParaderos();
});
document.querySelector('#btn-buscaParadero-back').addEventListener('click', function() {
	document.querySelector('#buscaParadero').className = 'right';
	document.querySelector('[data-position="current"]').className = 'current';
});


/**
 * Consulta Bip!
 */
document.querySelector('#btn-consultaBip').addEventListener('click', function() {
	loadConsultaBip();
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
	loadMapBip();
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