/**
 * @author psep
 */

function loadMapParaderos() {
	var lat = -33.449049;
	var lon = -70.654840;

	loadMap(lat, lon, true);
}

function loadMapBip() {
	var lat = -33.449049;
	var lon = -70.654840;

	loadMap(lat, lon, false);
}

function loadMap(lat, lon, isParadero) {
	var divId = '';
	var icon = '';
	var icon48 = '';

	// Valida si es paradero o centro Bip!
	if (isParadero == true) {
		divId = 'mapParaderos';
		icon = 'paradero24.png';
		icon48 = 'paradero48.png';
	} else {
		divId = 'mapCentrosBip';
		icon = 'bip24.png';
		icon48 = 'bip48.png';
	}

	// Se carga el div
	document.getElementById('frm-' + divId).innerHTML = '<div id="' + divId + '" style="width: 100%; height: 710px;"></div>';

	// Instancia del Mapa
	var map = L.map(divId, {
		center : [lat, lon],
		minZoom : 1,
		zoom : 16
	});

	// Carga el título del layer
	L.tileLayer('http://{s}.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png', {
		attribution : '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
		subdomains : ['otile1', 'otile2', 'otile3', 'otile4']
	}).addTo(map);

	// Se crea la instancia del ícono parametrizado
	var myIcon = L.icon({
		iconUrl : 'images/markers/' + icon,
		iconRetinaUrl : 'images/markers/' + icon48,
		iconSize : [24, 20],
		iconAnchor : [6, 13],
		popupAnchor : [0, -14]
	});

	// Se crea la instancia del marcador por defecto
	var myMarker = L.icon({
		iconUrl : 'images/markers/pin24.png',
		iconRetinaUrl : 'images/markers/pin48.png',
		iconSize : [29, 24],
		iconAnchor : [9, 21],
		popupAnchor : [0, -14]
	});

	L.marker([lat, lon], {
		icon : myMarker
	}).addTo(map);

	// Valores de límites de coordenadas
	var arriba = lat + 0.005;
	var abajo = lat - 0.005;
	var derecha = lon + 0.005;
	var izquierda = lon - 0.005;

	// Se crean los marcadores dinámicos para paraderos
	if (isParadero == true) {
		for (var i = 0; i < paraderos.length; ++i) {
			if (paraderos[i].lat >= abajo && paraderos[i].lat <= arriba && paraderos[i].lon >= izquierda && paraderos[i].lon <= derecha) {

				var test = "loadParadero('" + paraderos[i].id + "', '', true);";

				L.marker([paraderos[i].lat, paraderos[i].lon], {
					icon : myIcon
				}).bindPopup('<div id="btn-idCentroBip" onclick="' + test + '">' + paraderos[i].name + '</div>').addTo(map);
			}
		}
		
	// Se crean los marcadores dinámicos para centros bip!	
	} else {
		for (var i = 0; i < bips.length; ++i) {
			if (bips[i].lat >= abajo && bips[i].lat <= arriba && bips[i].lon >= izquierda && bips[i].lon <= derecha) {
				L.marker([bips[i].lat, bips[i].lon], {
					icon : myIcon
				}).bindPopup(bips[i].name).addTo(map);
			}
		}
	}

}