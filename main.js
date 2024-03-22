
// UPDATE THIS WITH A BETTER STARTING LATITUDE AND LONGITUDE AND ZOOM LEVEL
const map = L.map('map').setView([-42.497979, 172.323973], 7.1);
L.control.scale().addTo(map);


// REPLACE THIS BLOCK OF CODE WITH YOUR MAPBOX CODE
const tiles = L.tileLayer('https://api.mapbox.com/styles/v1/gdmckenzie/clu1ojhk0000801ra2hry4gk3/draft/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2RtY2tlbnppZSIsImEiOiJjbHNtZjZmdXEwb2h4MmltdGJodXd1MmpyIn0.UrHBVKEcCwL1MBqo8k7bmA', {
	maxZoom: 19,
	tileSize: 512,
    zoomOffset: -1,
	attribution: '&copy; OpenStreetMap | MapBox - Projection: WGS84 Spherical Mercator'
}).addTo(map);
// END REPLACE BLOCK



// There are four markers below.  Each has a latitude and longitude.  Edit these to be your unique places of interest.
// Also note that each has its own 'pop-up.'  Edit the text in each of these to say why each location is important to you.

const greenIcon = L.icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [20, 33], // Adjust the size here
    iconAnchor: [10, 33],
    popupAnchor: [1, -25],
    shadowSize: [33, 33]
});


const marker1 = L.marker([-46.835782, 168.087044], { icon: greenIcon }).addTo(map)
	.bindPopup('Port William Hut').openPopup();

const marker2 = L.marker([-46.809016, 168.033516], { icon: greenIcon }).addTo(map)
	.bindPopup('Bungaree Hut').openPopup();

const marker3 = L.marker([-46.74367710577063, 167.97947321980834], { icon: greenIcon }).addTo(map)
	.bindPopup('Christmas Village Hut').openPopup();

const marker4 = L.marker([-46.69441228872714, 167.88810637204733], { icon: greenIcon }).addTo(map)
	.bindPopup('Yankee River Hut').openPopup();

const marker5 = L.marker([-46.693904867453604, 167.80751394332577], { icon: greenIcon }).addTo(map)
	.bindPopup('Long Harry Hut').openPopup();

const marker6 = L.marker([-46.723535, 167.746077], { icon: greenIcon }).addTo(map)
	.bindPopup('East Ruggedy Hut').openPopup();

const marker7 = L.marker([-46.74604429383325, 167.7197324986978], { icon: greenIcon }).addTo(map)
	.bindPopup('Worst Camping Spot Ever').openPopup();

const marker8 = L.marker([-46.814066854976375, 167.738023723526], { icon: greenIcon }).addTo(map)
	.bindPopup('Big Hellfire Hut').openPopup();

const marker9 = L.marker([-46.926458044406964, 167.7800217374456], { icon: greenIcon }).addTo(map)
	.bindPopup('Mason Bay Hut').openPopup();

const marker10 = L.marker([-47.032875786621766, 167.70606121628208], { icon: greenIcon }).addTo(map)
	.bindPopup('Doughboy Bay Hut').openPopup();

const marker11 = L.marker([-46.98201796230116, 167.88082912818572], { icon: greenIcon }).addTo(map)
	.bindPopup('Rakiahua Hut').openPopup();

const marker12 = L.marker([-46.9282679487012, 167.97746582884804], { icon: greenIcon }).addTo(map)
	.bindPopup('Freds Camp Hut').openPopup();


// These are the Territorial Authority Polygons that are being accessed from a 3rd party server.
// Edit the style of these polygons (see: https://leafletjs.com/reference.html#path)
var geojsonLayer = new L.GeoJSON.AJAX("https://raw.githubusercontent.com/gdmckenzie123/GISC403/main/TA.geojson", {
		color: 'grey',
		fillOpacity: 0.0,
		weight: 0.1,
	});
geojsonLayer.addTo(map);

// These are the Protected Areas that are being accessed from a 3rd party server.
// Edit the style of these polygons (see: https://leafletjs.com/reference.html#path)
var geojsonLayer = new L.GeoJSON.AJAX("https://raw.githubusercontent.com/gdmckenzie123/GISC403/main/TA.geojson", {
		color: 'green',
		fillOpacity: 0.0,
		weight: 0.2,
	});
geojsonLayer.addTo(map);

// These are the Track Lines that are being accessed from a 3rd party server.
// Edit the style of these polygons (see: https://leafletjs.com/reference.html#path)
var geojsonLayer = new L.GeoJSON.AJAX("https://raw.githubusercontent.com/gdmckenzie123/GISC403/main/TA.geojson", {
		color: 'green',
		fillOpacity: 0.0,
		weight: 0.2,
	});
geojsonLayer.addTo(map);

// These are the Visited Huts that are being accessed from a 3rd party server.
// Edit the style of these polygons (see: https://leafletjs.com/reference.html#path)
var geojsonLayer = new L.GeoJSON.AJAX("https://raw.githubusercontent.com/gdmckenzie123/GISC403/main/TA.geojson", {
		color: 'green',
		fillOpacity: 0.0,
		weight: 0.2,
	});
geojsonLayer.addTo(map);





// This creates a polygon on your map with provided coordinates.  Edit this polygon to create your own polygon somewhere in New Zealand
// Edit the style of this polygon (see: https://leafletjs.com/reference.html#path)
const polygon = L.polygon([
		[-42.22989400193747, 171.57864140636082],
		[-42.25146114960972, 171.41356064148118],
		[-42.15111136123324, 171.30625814430937],
		[-41.900130860799, 171.40060092849043],
		[-42.07912673417578, 171.59627018803897],
	],{
		color: 'green',
    		fillColor: 'green',
    		fillOpacity: 0.5,
    		weight: 1,
	}).addTo(map).bindPopup('My favourite National Park to visit');

setTimeout(ReOrder, 1000);
function ReOrder() {
	geojsonLayer.bringToBack();
	polygon.bringToFront();
}


// END OF DOCUMENT
