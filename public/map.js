// Learning objectives:

// practice adding event listeners to items in the DOM
// practice using the Google Maps API
// use documentation and online research to add features to your map
// Tasks

// Add an Info Window to one of the markers on your map (see the Google Maps API documentation) with some information about the place it's marking.

// Add a button below the map that says 'Take me to Chicago' (or another city) which moves the center of the map to be the co-ordinates of that city. Tip: look up the 'setCenter' method for Google Maps.

var Map = function(container, coords, zoom) {
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });

  this.addMarker = function(coords) {
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap,
      label: "1"
    });
    return marker;
  }
  this.addClickEvent = function() {
    google.maps.event.addListener(this.googleMap, 'click', function(event) {

      var position = { lat: event.latLng.lat() , lng: event.latLng.lng()}

      this.addMarker(position);
    }.bind(this))
  }
  this.addInfoWindow = function(content) {
    var infoWindow = new google.maps.InfoWindow({
      content: content
    });
    return infoWindow;
  }
  this.addListenerInfoWindow = function(infoWindow, marker) {
    marker.addListener('click', function() {
      infoWindow.open(this, marker);
    });
  }
}
