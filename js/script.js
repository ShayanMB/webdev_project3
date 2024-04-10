var myMap; // Global variable to hold the map object
var marker; // Global variable to hold the marker object

function init() {
    var el = document.getElementById('map');
    var myLocation = new google.maps.LatLng(41.948463, -87.655800);
    var mapOptions = {
        center: myLocation,
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        mapTypeControlOptions: {
            position: google.maps.ControlPosition.BOTTOM_CENTER
        }
    };

    myMap = new google.maps.Map(el, mapOptions);

    marker = new google.maps.Marker({
        position: myLocation,
        map: myMap,
        animation: google.maps.Animation.BOUNCE,
        icon: 'images/cubs.png'
    });

    var contentString = '<h1>Wrigley Field</h1>' + '<p class="info-text">Home of the Chicago Cubs!</p>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    // Add event listener for when the marker is hovered over
    google.maps.event.addListener(marker, 'mouseover', function() {
        infowindow.open(myMap, marker);
    });
}

function toggleMapType() {
    if (myMap.getMapTypeId() === google.maps.MapTypeId.SATELLITE) {
        myMap.setMapTypeId(google.maps.MapTypeId.ROADMAP);
    } else {
        myMap.setMapTypeId(google.maps.MapTypeId.SATELLITE);
    }
}

google.maps.event.addDomListener(window, 'load', init);
