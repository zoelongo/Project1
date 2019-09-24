//api key// //Google Maps//
//  AIzaSyDyp7bpK6RfNdcRxbAD33R3GDLqhKAfico&callback=initMap //

//https key//
// ""https://maps.googleapis.com/maps/api/js?key=AIzaSyCcF1CUzKzcoWX96CTe1rgms1qhFd1vG7w&callback=initMap"

//build queryKey//Lat-Long
// var key1 = "200596500-c627d9f7783f081d34b8bd993d2abd94"


// Initialize map
function initMap() {
    // The location of Uluru
    var uluru = { lat: 39.5501, lng: 105.7821 };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 13, center: uluru });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({ position: uluru, map: map });
}
//Initialize Firebase//
// $(document).ready(function () {
var firebaseConfig = {
    apiKey: "AIzaSyBi-O17PsVdUQGHlfY3qhoiIBpnbuKWpM4",
    authDomain: "test-7d555.firebaseapp.com",
    databaseURL: "https://test-7d555.firebaseio.com",
    projectId: "test-7d555",
    storageBucket: "",
    messagingSenderId: "98104578426",
    appId: "1:98104578426:web:c2908835db8c009512c6c3"
};

firebase.initializeApp(firebaseConfig);
var dataRef = firebase.database();
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 39.5501, lng: 105.7821 },
        zoom: 8
    });
    
    $("button").on('click', function (event) {
        event.preventDefault()

        //declare variables
        console.log("clicked");
        //using lat/long on google map's api//


        //AJAX request do we need? //to thr hiking api// create push pins

        // $.ajax({
        //     url: queryURL,
        //     method: "GET"
        // })
        //     .then(function (response) {
        //         var requests = response.data;
        //         // var rating = requests[i].rating;
        //         console.log(response)
        //         makeajaxCall(requests);
        //     });
    })
    var map;
    function initialize() {
        var mapOptions = {
            zoom: 8,
            center: { lat: 39.5501, lng: 105.7821 }
        };
        map = new google.maps.Map(document.getElementById('map'),
            mapOptions);

        var marker = new google.maps.Marker({
            // The below line is equivalent to writing:
            // position: new google.maps.LatLng(-34.397, 150.644)
            position: { lat: 39.5501, lng: 105.7821 },
            map: map
        });
        https://robwu.nl/cors-anywhere.html
 
        // You can use a LatLng literal in place of a google.maps.LatLng object when
        // creating the Marker object. Once the Marker object is instantiated, its
        // position will be available as a google.maps.LatLng object. In this case,
        // we retrieve the marker's position using the
        // google.maps.LatLng.getPosition() method.
        var infowindow = new google.maps.InfoWindow({
            content: '<p>Marker Location:' + marker.getPosition() + '</p>'
        });

        google.maps.event.addListener(marker, 'click', function () {
            infowindow.open(map, marker);
        });
    }

    google.maps.event.addDomListener(window, 'load', initialize);
    // })
    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
    }
    
};

function displayTrails() {


    var queryURL = "https://robwu.nl/cors-anywhere.html/https://www.hikingproject.com/data/get-trails?lat=" + latitude + "&lon=" + longitude + "&maxDistance=10&key=200596506-26bc833d725fdffcceae29661683dbd8"
    var trails = $(this).attr("data-name")
    var latitude= 39.5501;
    var longitude= 105.7821;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    })

    displayTrails()
    
}
