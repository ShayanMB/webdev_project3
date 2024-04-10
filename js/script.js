var myMap;
var marker;

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

function toggleMarkerBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}

function toggleMarkerVisibility() {
    if (marker.getVisible()) {
        marker.setVisible(false);
    } else {
        marker.setVisible(true);
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}


google.maps.event.addDomListener(window, 'load', init);
