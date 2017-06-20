

function initMap(){

	var map = new google.maps.Map(document.getElementById("map"),{
		zoom: 5,
		center: {lat: -9.1191427, lng: -77.0349046},
		mapTypeControl: false,
		zoomControl: false,
		streetViewControl: false
	});

 	function buscar(){
		if(navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
		}
	}
	document.getElementById("encuentrame").addEventListener("click", buscar);
	var latitud,longitud;

	var funcionExito = function(posicion){
		latitud = posicion.coords.latitude;
		longitud = posicion.coords.longitude;
		var miUbicacion = new google.maps.Marker({
			position: {lat:latitud, lng:longitud},
			animation: google.maps.Animation.DROP,
			map: map,
			icon: 'http://www.gps-routes.co.uk/routes/home.nsf/cycleicon.png'
		});
		map.setZoom(17);
		map.setCenter({lat:latitud, lng:longitud});
	}
	var funcionError = function(error){
		alert("Tenemos un problema con encontrar tu ubicación");
	}
	//input1
    var input1 = (document.getElementById("desde"));
    var autocomplete = new google.maps.places.Autocomplete(input1);
        autocomplete.bindTo("bounds", map);
    //input2
    var input2 = (document.getElementById("hasta"));
    var autocomplete = new google.maps.places.Autocomplete(input2);
        autocomplete.bindTo("bounds", map);
}

