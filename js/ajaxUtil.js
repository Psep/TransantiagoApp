/**
 * @author psep
 */

/**
 * @param ajaxResponse
 * @return ajaxResponse
 */
function processObject(ajaxResponse) {
	if ( typeof ajaxResponse == "string")
		ajaxResponse = $.parseJSON(ajaxResponse);
	return ajaxResponse;
}

/**
 * Función que es llamada para el
 * error de la transacción ajax.
 */
function errorCallback() {
	alert("No existe información asociada, revise");
}