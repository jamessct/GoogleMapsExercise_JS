// Learning objectives:

// practice adding event listeners to items in the DOM
// practice using the Google Maps API
// use documentation and online research to add features to your map
// Tasks

// Add an Info Window to one of the markers on your map (see the Google Maps API documentation) with some information about the place it's marking.

// Add a button below the map that says 'Take me to Chicago' (or another city) which moves the center of the map to be the co-ordinates of that city. Tip: look up the 'setCenter' method for Google Maps.

var initialize = function() {
  var container = document.getElementById('map');
  var center =  {lat: 40.712784, lng: -74.005941};
  
  var map = new Map(container, center, 10);
  var newYork = map.addMarker(center);
  map.addClickEvent();

  var content = "<p>hi</p>";
  var infoWindow = map.addInfoWindow(content);
  map.addListenerInfoWindow(infoWindow, newYork); 

  var button = teleportButton();
  addButton(button);
  button.onclick = function() {
    teleport(map);
  }
}

var teleport = function(map) {
  var codeClan = { lat: 55.94716, lng: -3.20198}; 
  map.googleMap.setCenter(new google.maps.LatLng(codeClan.lat, codeClan.lng));
  map.addClickEvent();
}

var teleportButton = function() {
  var button = document.createElement("button");
  button.innerText = "TELEPORT";
  return button;
}

var addButton = function(button) {
  document.body.appendChild(button);
}

window.onload = initialize;