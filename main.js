
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
    iconSize: [20, 33],
    iconAnchor: [10, 33],
    popupAnchor: [1, -25],
    shadowSize: [33, 33]
});

const blueIcon = L.icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [20, 33],
    iconAnchor: [10, 33],
    popupAnchor: [1, -25],
    shadowSize: [33, 33]
});

const redIcon = L.icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [20, 33],
    iconAnchor: [10, 33],
    popupAnchor: [1, -25],
    shadowSize: [33, 33]
});

const yellowIcon = L.icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [20, 33],
    iconAnchor: [10, 33],
    popupAnchor: [1, -25],
    shadowSize: [33, 33]
});


const marker1 = L.marker([-43.64051695659158, 172.4788262839913], { icon: blueIcon }).addTo(map)
	.bindPopup('This is where I work').openPopup();

const marker2 = L.marker([-43.64383144412125, 172.49939637575176], { icon: redIcon }).addTo(map)
	.bindPopup('This is where I live').openPopup();

const marker3 = L.marker([-41.320211730673336, 173.22623685901635], { icon: greenIcon }).addTo(map)
	.bindPopup('This is where I grew up').openPopup();

const marker4 = L.marker([-41.74603857843466, 171.56189205931997], { icon: greenIcon }).addTo(map)
	.bindPopup('This is our family bach').openPopup();

const marker5 = L.marker([-43.522405944685644, 172.56241045637384], { icon: blueIcon }).addTo(map)
	.bindPopup('This is where I study').openPopup();



// These are the Territorial Authority Polygons that are being accessed from a 3rd party server.
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