


var map = L.map('mapid').setView([48.871, 2.34], 7);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoibmljb2xhc2hvdiIsImEiOiJja2c4ZmJnencwNmM3MnNwbnZpeTU5MzU1In0.qXlznjJDRX1izpDYbPktdA'
}).addTo(map);

var marker = L.marker([51.509, -0.19]).addTo(map)

var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

// ########## 


function onEachFeature(feature, layer) {
    // does this feature have a property named description?
    if (feature.properties && feature.properties.description) {
        layer.bindPopup(feature.properties.title + "\n" + feature.properties.description);
    }
}

L.geoJSON([restaurants], {
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        return L.marker(
            latlng, 
            {icon: L.icon({
                iconUrl: feature.properties.image,
                iconSize: [32, 32],
                iconAnchor: [16, 33],
                popupAnchor: [0, -32]
                })
            }
        );
    }
}).addTo(map);