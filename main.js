
// UPDATE THIS WITH A BETTER STARTING LATITUDE AND LONGITUDE AND ZOOM LEVEL
const map = L.map('map').setView([-46.91407834950675, 167.87005192176042], 10);
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

const redIcon = L.icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [20, 33], // Adjust the size here
    iconAnchor: [10, 33],
    popupAnchor: [1, -25],
    shadowSize: [33, 33]

});

const marker2 = L.marker([-46.809016, 168.033516], { icon: greenIcon }).addTo(map)
	.bindPopup('Bungaree Hut was the first hut we stayed at on the NW circuit. Lots of travellers present at the hut that night and we shared some caught seafood with the hunters who were hunting on the block').openPopup();

const marker3 = L.marker([-46.74367710577063, 167.97947321980834], { icon: greenIcon }).addTo(map)
	.bindPopup('Christmas Village Hut was the second hut we stayed at on the circuit. We stayed here with two other young trampers on Christmas Day. We were unsucessful in our fishing expidition as we could not cast far enough beyond the kelp').openPopup();

const marker4 = L.marker([-46.69441228872714, 167.88810637204733], { icon: greenIcon }).addTo(map)
	.bindPopup('Yankee River Hut was the third hut we stayed at on the circuit. We met a lovely older couple who provided us with additional food for our trip after we helped them order a water taxi. This food helped us greatly to extend our trip to include the southern circuit').openPopup();

const marker5 = L.marker([-46.693904867453604, 167.80751394332577], { icon: greenIcon }).addTo(map)
	.bindPopup('Long Harry Hut was the fourth hut we stayed at on the circuit and by far the most scenic. I managed to get paua off the rocks and we lit the fire and cooked them up').openPopup();

const marker6 = L.marker([-46.723535, 167.746077], { icon: greenIcon }).addTo(map)
	.bindPopup('East Ruggedy Hut was the fifth hut we were meant to stay at, however we were feeling so good about our progress that we continued on to the aforementioned shit camping spot').openPopup();

const marker7 = L.marker([-46.74604429383325, 167.7197324986978], { icon: greenIcon }).addTo(map)
	.bindPopup('Worst Camping Spot Ever: shared our tent with blowflies and hundreds of sandflies. Met two ultramarathon runners running the whole NW circuit in a single push. This was so inspirational, Kate and I started training for an Ultra Marathon when we got back to Christchurch').openPopup();

const marker8 = L.marker([-46.814066854976375, 167.738023723526], { icon: greenIcon }).addTo(map)
	.bindPopup('Big Hellfire Hut was the sixth hut we stayed at on the circuit. Stunning views before it went dark and rained heavily at night').openPopup();

const marker9 = L.marker([-46.926458044406964, 167.7800217374456], { icon: greenIcon }).addTo(map)
	.bindPopup('Mason Bay Hut was the seventh hut we stayed at on the circuit and the buisiest. People at this hut were generally not very friendly.').openPopup();

const marker10 = L.marker([-47.032875786621766, 167.70606121628208], { icon: greenIcon }).addTo(map)
	.bindPopup('Doughboy Bay Hut was the eighth hut we stayed at and this was on the southern circuit. We stayed two nights as we wanted a rest day. Getting there was an absolute mission through knee and hip deep mud!').openPopup();

const marker11 = L.marker([-46.98201796230116, 167.88082912818572], { icon: greenIcon }).addTo(map)
	.bindPopup('Rakiahua Hut was the ninth hut we visited on the circuit. We were making such good progress that we decided to continue onwards to Freds Camp Hut. This was a very long day, covering around 40km over 12 hours.').openPopup();

const marker12 = L.marker([-46.9282679487012, 167.97746582884804], { icon: greenIcon }).addTo(map)
	.bindPopup('Freds Camp Hut was the tenth hut we stayed at on the circuit. We stayed here for two days before getting a boat out to Oban. We spent the additional time at the hut fishing and cooking up mussels.').openPopup();

const marker13 = L.marker([-46.82832449713171, 167.7563644919983], { icon: redIcon }).addTo(map)
	.bindPopup('Our First ever kiwi sighting within the first couple of hours of the tramp!').openPopup();

const marker14 = L.marker([-46.855105198186884, 168.0996454694832], { icon: redIcon }).addTo(map)
	.bindPopup('Our second kiwi sighting that happened after a very rainy night. It gave me a massive fright and I almost stood on it!').openPopup();


// These are the Territorial Authority Polygons that are being accessed from a 3rd party server.
// Edit the style of these polygons (see: https://leafletjs.com/reference.html#path)
var geojsonLayer = new L.GeoJSON.AJAX("https://raw.githubusercontent.com/gdmckenzie123/GISC403/main/TA.geojson", {
		color: 'grey',
		fillOpacity: 0.0,
		weight: 0.1,
	});
geojsonLayer.addTo(map);

// This creates a polygon on your map with provided coordinates.  Edit this polygon to create your own polygon somewhere in New Zealand
// Edit the style of this polygon (see: https://leafletjs.com/reference.html#path)
const polygon = L.polygon([
		[-46.93336303207364, 167.41057953299136],
		[-46.71695150909748, 167.5872760527958],
		[-46.643003268529704, 167.80814670255134],
		[-46.691505341656566, 168.02548342191076],
		[-46.84400245036655, 168.18981118532886],
		[-46.97678192123511, 168.2516549672604],
		[-47.105624573260016, 168.2516549672604],
		[-47.09193875130081, 167.81953058351849],
	],{
		color: 'brown',
    		fillColor: 'brown',
    		fillOpacity: 0.1,
    		weight: 1,
	}).addTo(map).bindPopup('This was my absolute favourite National Park and place in New Zealand to visit. We stayed on the island for around 3 weeks, with two of those weeks spent tramping around the North-West and Southern Circuits. The people we met were fantastic and friendly on the island. The strong women and ultra marathon runners we met on the trail were inspriational which kick started our journey into trail running. Without this trip, I would not have the goals that I have today and the strong bond that I have with my Wife. I would go back to Rakiura in a heartbeat and every time, I know that I will have a tear in my eye when I leave the island at the end of the trip.');

setTimeout(ReOrder, 1000);
function ReOrder() {
	geojsonLayer.bringToBack();
	polygon.bringToFront();
}


// END OF DOCUMENT
