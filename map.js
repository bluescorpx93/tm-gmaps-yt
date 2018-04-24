/* function initMap(){

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

} */

function initMap(){

	var dhakaMap = createMap(mZoom=12, centerLat=23.8103, centerLong= 90.4125);

	var gulshanMarker = createMarker(posLat=23.7925, posLong=90.4078, theMap=dhakaMap);

	var bananiMarker = createMarker(posLat = 23.7940, posLong = 90.4043, theMap=dhakaMap);

	var gulInfoWin = createAndSetupInfoWindow(theMap=dhakaMap, theMarker=gulshanMarker, theContent="Gulshan City");

	var banInfoWin = createAndSetupInfoWindow(theMap=dhakaMap, theMarker=bananiMarker, theContent="Banani Zone");
}


function createMap(mZoom, centerLat, centerLong){
	return new google.maps.Map(document.getElementById("map"), {
		zoom: mZoom,
		center: {
			lat: centerLat,
			lng: centerLong
		}
	})
}

function createMarker(posLat, posLong, theMap){

	return new google.maps.Marker({
		position: {
			lat: posLat,
			lng: posLong
		},
		map: theMap
	})
}

function createAndSetupInfoWindow(theMap, theMarker, theContent){
	var infoWin = new google.maps.InfoWindow({content: theContent});
	theMarker.addListener("click", function(){
		infoWin.open(theMap, theMarker);
	})
}