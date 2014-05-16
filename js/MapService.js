/**
 * @author psep
 */

function loadMapParaderos(lat, lon) {
	document.getElementById('frm-mapParadero').innerHTML = '<div id="mapParaderos" style="width: 100%; height: 710px;"></div>';
	
	var map = L.map('mapParaderos', {
		center : [lat, lon],
		minZoom : 2,
		zoom : 16
	});

	L.tileLayer('http://{s}.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png', {
		attribution : '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
		subdomains : ['otile1', 'otile2', 'otile3', 'otile4']
	}).addTo(map);

	var myIcon = L.icon({
		iconUrl : 'images/markets/paradero24.png',
		iconRetinaUrl : 'images/markets/paradero48.png',
		iconSize : [29, 24],
		iconAnchor : [9, 21],
		popupAnchor : [0, -14]
	});
//
// for ( var i=0; i < markers.length; ++i )
// {
// L.marker( [markers[i].lat, markers[i].lng], {icon: myIcon} )
// .bindPopup( '<a href="' + markers[i].url + '" target="_blank">' + markers[i].name + '</a>' )
// .addTo( map );
// }
// 
}