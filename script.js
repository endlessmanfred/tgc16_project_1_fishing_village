////// MAP //////
// we need a centre position for our map
// to be the startin gposition
let singapore = [1.32, 103.8198];  // array of 2 elements for lat lng

// create the map
// "L" is the Leaflet object which is in the global scope, found in leaflet.js
// and is created when we <script src = "leaflet.js"...>
// L.map() creates a map object (contains all functionalities / data)
// and it takes in one arg: the ID to put the map in
let map = L.map('singaporeMap').setView(singapore, 11.6);   // 'singaporeMap' is the ID in HTML, L is a global variable from leaflet.js

// boiletplate code
// this sets up the drawing of the map
// setup the tile layers
// [mapbox] explore this if want to style layers
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'endlessmanfred/ckzw7tlf2008q14lmux3n5cgj',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZW5kbGVzc21hbmZyZWQiLCJhIjoiY2t6aTJuc2RwNDc2ejJ3bXowNXBtYWk1dSJ9.Yt4PmgsJ_ITVyTBY1H9CGg' //demo access token
}).addTo(map);


////// MARKERS //////
// Creating a marker overlay (layer) to the map
let homeMarker = L.marker([1.323930, 103.8622]);
// Adding the marker to the map
homeMarker.addTo(map);
//  or: map.add(singaporeMarker);

let hillviewMarker = L.marker([1.3612, 103.7649]);
hillviewMarker.addTo(map);

// shorthand way of adding markers
L.marker([1.2494, 103.8303]).addTo(map);

////// MARKER POP-UP //////
// add a pop-up box to the Home box
homeMarker.bindPopup(`<h1>Manfred's Home</h1>
<p>Singapore (/ˈsɪŋ(ɡ)əpɔːr/), officially the Republic of Singapore,
 is a sovereign island city-state in maritime Southeast Asia.</p>`);

// or we can add an event listener to mark
hillviewMarker.addEventListener('click', function(){
    alert("I can see my house from here!");
})


////// CIRCLE //////
// create a circle
// first arg is the lat lng of the circle centre point
let bukitTimahCircle = L.circle([1.3294, 103.8021], {
    color: 'red',
    fillColor: 'orange',
    fillOpacity: 0.5,
    radius: 500 // (metres)
})

bukitTimahCircle.addTo(map);


////// Adding fishing markers to the map //////
// const fishingMarkers = require("./fishing_markers.json");
// let markerList;

// for (let i of fishingMarkers.features) {
//     markerList.add(i.coordinates);
// }

// console.log(markerList);



/////
window.addEventListener('DOMContentLoaded', async function() {
    // #1 Load in geojson data
    let response = await axios.get("map.geojson");
    let data = response.data;
    console.log(data);
    let x = L.geoJSON(data, {
        style: function (feature) {
            return {color: feature.properties.color};
        }
    }).bindPopup(function (layer) {
        return layer.feature.properties.description;
    }).addTo(map);

    x.setStyle({
        'color':'red'
    })
})