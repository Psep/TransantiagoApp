/**
 * @author psep
 */

/**
 * @param String paradero
 * @param String bus
 */
function getParaderoBusData(paradero, bus){
	var data = "busquedaParadero=";
	data += paradero;
	data += "&busquedaBus=";
	data += bus;

	try {
		$(document).ajaxStart(
			$.blockUI({ centerY: 0, 
						css: { 
           					border: 'none', 
           					padding: '15px', 
           					backgroundColor: '#000',
           					opacity: .5, 
           					color: '#F9F9F9'
       					},
       					message: '<h1>Espere</h1>' 
       				   })
		).ajaxStop($.unblockUI);
			
		$.ajax({
			type : 'GET',
			dataType : 'json',
			url : 'http://www.psep.cl/api/ParaderoService.php?',
			data : data,
			success : successCallback,
			error : errorCallback
		});
		
	} catch(e) {
		alert("error: " + e.description);
	}

}

/**
 * @param ajaxResponse
 */
function successCallback(ajaxResponse) {
	var dataProcess = processObject(ajaxResponse);

	if (!dataProcess) {
		alert("No existe información asociada");
		return;
	}
	
	var html = "<header style='font-size: 0.95em;'>";
	html += dataProcess['header'];
	html += "</header>";
	html += "<header style='font-size: 0.95em;'>";
	html += dataProcess['info'];
	html += "</header>";
	html += dataProcess['dataList'];
	
	document.getElementById('div-dataParaderos').innerHTML = html;
}