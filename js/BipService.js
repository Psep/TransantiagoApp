/**
 * @author psep
 */

/**
 * Carga el formulario de la consulta Bip
 * mediante el reemplazo de un div.
 */
function loadConsultaBip() {
	var html = generaForm('');
	
	document.getElementById('div-consultaBip').innerHTML = html;
}

/**
 * Genera el formulario de consulta Bip!
 * @param Integer idTarjeta
 * @return String
 */
function generaForm(numTarjeta) {
	var html = '<p>N° de Tarjeta</p>';
	html += '<p><input id="txtTarjetaBip" type="number" placeholder="Ej: 12345" maxlength="15" ';
	html += 'value="' + numTarjeta + '" ';
	html += 'type="number"/></p>';
	html += '<p><button id="btn-BuscarConsultaBip" onclick="getConsulta();">Consultar</button></p>';
	
	return html;
}

/**
 * Función que ejecuta la acción del botón click
 * ejecutando la validación y posterior llamado
 * ajax a la api con json, reescribiendo si la
 * data es correcta un div con la información
 * respectiva en relación a la tarjeta bip!
 */
function getConsulta() {
	var id = parsedId();

	if (id > 0) {
		var data = "numberBip=";
		data += id;

		try {
			$(document).ajaxStart($.blockUI({
				centerX : 1,
				centerY : 1,
				css : {
					border : 'none',
					padding : '15px',
					backgroundColor : '#000',
					opacity : .5,
					color : '#F9F9F9'
				},
				message : '<h1>Espere</h1>'
			})).ajaxStop($.unblockUI);

			$.ajax({
				type : 'GET',
				dataType : 'json',
				url : 'http://www.psep.cl/api/Bip.php?',
				data : data,
				success : successCallback,
				error : errorCallback

			});
		} catch(e) {
			alert(e.description);
			alert("error");
		}

	}
}

/**
 * Función que recibe la respuesta ajax
 * para luego procesarla y formatear el
 * div indicado.
 *
 * @param {Object} ajaxResponse
 */
function successCallback(ajaxResponse) {
	var dataProcess = processObject(ajaxResponse);

	if (!dataProcess) {
		alert("No existe información asociada");
		return;
	}

	var aux = 0;
	var html = generaForm($("#txtTarjetaBip").val());
	html += "<br />";
	html += '<section data-type="list">';
	html += "<header style='font-size: 0.95em;'>";
	html += "Saldo correspondiente a la fecha indicada";
	html += "</header>";
	html += "<br />";
	html += "<ui>";
	
	for (var i in dataProcess) {
		var obj = dataProcess[i];

		switch(aux) {
			case 0:
				html += "<li><p>Número Tarjeta</p><p>";
				html += obj;
				html += "</p></li>";
				break;
			case 1:
				html += "<li><p>Estado Contrato</p><p>";
				html += obj;
				html += "</p></li>";
				break;
			case 2:
				html += "<li><p>Saldo Tarjeta</p><p>";
				html += obj;
				html += "</p></li>";
				break;
			case 3:
				html += "<li><p>Fecha Saldo</p><p>";
				html += obj;
				html += "</p></li>";
				break;
		}
		aux++;
	}
	
	html += "</ui>";
	html += "</section>";
	
	
	document.getElementById('div-consultaBip').innerHTML = html;
}

/**
 * Función que valida el campo del ID
 * de la tarjeta, retornándolo como entero
 */
function parsedId() {
	var id = parseInt($("#txtTarjetaBip").val());

	if (isNaN(id) || id == 0) {
		alert("Debe indicar Número de Tarjeta válido");
		$("#txtTarjetaBip").val("");
		return 0;
	} else {
		return id;
	}
}