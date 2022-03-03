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

////// JETTY MARKERS //////
let woodlandsJettyMarker = L.marker([1.455121, 103.777874]).addTo(map);
let sembawangJettyMarker = L.marker([1.464334, 103.837198]).addTo(map);
let punggolPointMarker = L.marker([1.421852, 103.910678]).addTo(map);
let pasirRisParkMarker = L.marker([1.384529, 103.950554]).addTo(map);
let pulauUbinMarker = L.marker([1.400135, 103.968224]).addTo(map);
let changiMarker = L.marker([1.393659, 103.987839]).addTo(map);
let sungeiBedokMarker = L.marker([1.313913, 103.963731]).addTo(map);
let bedokJettyMarker = L.marker([1.305247, 103.942163]).addTo(map);
let marinaSouthPierMarker = L.marker([1.268816, 103.861784]).addTo(map);
let labradorNatureReserveMarker = L.marker([1.264617, 103.806939]).addTo(map);
let labradorJettyMarker = L.marker([1.265761, 103.800144]).addTo(map);
let westCoastMarker = L.marker([1.265761, 103.800144]).addTo(map);
let southernIslandsMarker = L.marker([1.222006, 103.851166]).addTo(map);
let pulauHantuMarker = L.marker([1.225360, 103.750207]).addTo(map);
let pangSuaMarker = L.marker([1.401640, 103.752340]).addTo(map);
let upperSeletarMarker = L.marker([1.405987, 103.807241]).addTo(map);
let lowerSeletarMarker = L.marker([1.406579, 103.828820]).addTo(map);
let lowerPierceMarker = L.marker([1.370456, 103.825692]).addTo(map);
let serangoonMarker = L.marker([1.405831, 103.920479]).addTo(map);
let bedokMarker = L.marker([1.342376, 103.926275]).addTo(map);
let pettonCanalMarker = L.marker([1.322013, 103.879677]).addTo(map);
let kolamAyerMarker = L.marker([1.321557, 103.867485]).addTo(map);
let macritchieMarker = L.marker([1.344745, 103.834540]).addTo(map);
let geylangRiverMarker = L.marker([1.304999, 103.883995]).addTo(map);
let kallangRiverMarker = L.marker([1.309176, 103.870014]).addTo(map);
let rochorCanalMarker = L.marker([1.306058, 103.863073]).addTo(map);
let pandanReservoirMarker = L.marker([1.313397, 103.741913]).addTo(map);
let auntiesSaltwaterMarker = L.marker([1.444752, 103.728974]).addTo(map);
let ahLimMarker = L.marker([1.443390, 103.728786]).addTo(map);
let fishingParadiseMarker = L.marker([1.413019, 103.830219]).addTo(map);
let gillsFishingMarker = L.marker([1.415829, 103.898843]).addTo(map);
let edsMarker = L.marker([1.390141, 103.929210]).addTo(map);
let boatSouthernIslandMarker = L.marker([1.235540, 103.807251]).addTo(map);
let boatTuasMarker = L.marker([1.309131, 103.618866]).addTo(map);
let boatPunggolMarker = L.marker([1.443970, 103.871433]).addTo(map);
let boatChangiMarker = L.marker([1.398654, 103.985452]).addTo(map);

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