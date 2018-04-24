function initMap(){

	var mapOptions = {
		zoom: 12,
		center: {
			lat: 23.8103,
			lng: 90.4125
		}
	}

	var mapElem = document.getElementById("map");

	var dhakaMap = new google.maps.Map(mapElem, mapOptions);


	var markerOptions = {
		position: {
			lat: 23.7925,
			lng: 90.4078
		},
		map: dhakaMap
	}

	var gulshanMarker = new google.maps.Marker(markerOptions);

	gulshanMarker.addListener('click', function(){
		gulshanInfoWindow.open(dhakaMap, gulshanMarker);
	});

	var gulshanInfoWindow = new google.maps.InfoWindow({content: "<h3> Gulshan 2 </h3>"});



}