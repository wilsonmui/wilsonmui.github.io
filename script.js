var map;
var geocoder;

var standard_style = [
    {
        "featureType": "administrative.land_parcel",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    }
];
var night_style = [
    {
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ebe3cd"
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#523735"
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#f5f1e6"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#c9b2a6"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#dcd2be"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ae9e90"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dfd2ae"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dfd2ae"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#93817c"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#a5b076"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#447530"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f1e6"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#fdfcf8"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f8c967"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#e9bc62"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e98d58"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#db8555"
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#806b63"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dfd2ae"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#8f7d77"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ebe3cd"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dfd2ae"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#b9d3c2"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#92998d"
            }
        ]
    }
];

if (localStorage.getItem('night') === null) {
    localStorage.night = false;
    activateLightMode();
}
else if (localStorage.getItem('night') === true) {
    activateDarkMode();
    console.log("night mode on");
    document.querySelector('#night_toggle').checked = true;
}

function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 36.7783, lng: -119.4179 },
        zoom: 7,
        styles: standard_style
    });
    //activateLightMode();

    map.data.setStyle(styleFeature);
    // Get the earthquake data (JSONP format)
    // This feed is a copy from the USGS feed, you can find the originals here:
    //   http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php

    geocoder = new google.maps.Geocoder();
    drawEQMap();
    
}

function scale(num, in_min, in_max, out_min, out_max) {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

// https://stackoverflow.com/questions/5585957/get-latlng-from-zip-code-google-maps-api
function searchZip() {
    var address = document.getElementById("zipcode_entry").value;
    console.log("zipcode entered: " + address)

    geocoder.geocode({'address': address}, function(results, status) {
        if (status === 'OK') {
            map.panTo(results[0].geometry.location);
            map.setZoom(11);
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}


function drawEQMap(){
    var script = document.createElement('script');
    script.setAttribute(
        'src',
        'https://storage.googleapis.com/mapsdevsite/json/quakes.geo.json');
    document.getElementsByTagName('head')[0].appendChild(script);
}

// Defines the callback function referenced in the jsonp file.
function eqfeed_callback(data) {
    map.data.addGeoJson(data);
}

function styleFeature(feature) {
    var low = [151, 83, 34];   // color of mag 1.0
    var high = [5, 69, 54];  // color of mag 6.0 and above
    var minMag = 1.0;
    var maxMag = 6.0;

    // fraction represents where the value sits between the min and max
    var fraction = (Math.min(feature.getProperty('mag'), maxMag) - minMag) /
        (maxMag - minMag);

    var color = interpolateHsl(low, high, fraction);
    var time = feature.getProperty('time');
    var opacity = scale(time, 1213161734 * 1000, 1560236024 * 1000, 0, 1);
    //console.log(opacity);

    return {
        icon: {
            path: google.maps.SymbolPath.CIRCLE,
            strokeWeight: 0.5,
            strokeColor: '#fff',
            fillColor: color,
            fillOpacity: opacity,
            // while an exponent would technically be correct, quadratic looks nicer
            scale: Math.pow(feature.getProperty('mag'), 2) * 2
        },
        zIndex: Math.floor(feature.getProperty('mag'))
    };
}

function interpolateHsl(lowHsl, highHsl, fraction) {
    var color = [];
    for (var i = 0; i < 3; i++) {
        // Calculate color based on the fraction.
        color[i] = (highHsl[i] - lowHsl[i]) * fraction + lowHsl[i];
    }

    return 'hsl(' + color[0] + ',' + color[1] + '%,' + color[2] + '%)';
}

function search() {
    if(event.key === 'Enter') {
        searchZip();
    }
}


// check night toggle
var toggle = document.getElementById("night_toggle");
function toggle_action() {
    if (document.querySelector('#night_toggle').checked){
        console.log("night mode on");
        // switch to night theme
        activateDarkMode();
    }
    else {
        // switch to light theme
        activateLightMode();
    }
}

function activateDarkMode() {
    map.setOptions({styles:night_style});
    const rootElement = document.querySelector(':root')
    const darkTheme = {
        '--background-color': '#1e1e1e',
        '--primary-color': '#157efb',
        '--font-color': '#ffffff',
        '--subtle-primary-color': '#151513',
        '--block-background-color': '#323232',
        '--menu-item-color': '#dedede',
        '--menu-item-hover-color': '#e4c844',
        '--menu-item-alert-bg': '#151513',
        '--menu-item-alert-shadow': '#151513',
        '--alert-border-color': '#000',
        '--tertiary-color:': '#727680',
        '--search-bar-color': '#727680'
    }
    for(k in darkTheme) {
        rootElement.style.setProperty(k, darkTheme[k])
    }
    localStorage.setItem('night', 'true');
}

function activateLightMode() {
    map.setOptions({styles: standard_style});
    const rootElement = document.querySelector(':root')
    const lightTheme = {
        '--background-color': '#fff',
        '--page-width': '70em',
        '--primary-color': '#151513',
        '--font-color': '#484846',
        '--subtle-primary-color': '#151513',
        '--block-background-color': '#f0f2f3',
        '--menu-item-color': '#000',
        '--menu-item-hover-color': '#000',
        '--menu-item-alert-bg': '#ffffff',
        '--menu-item-alert-shadow': '#dfe1e7',
        '--alert-border-color': '#dfe1e7',
        '--tertiary-color:': '#727680',
        '--search-bar-color': '#fff'

    }
    for(k in lightTheme) {
        rootElement.style.setProperty(k, lightTheme[k])
    }
    localStorage.setItem('night', 'false');
}
