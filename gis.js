 // Create a Leaflet map centered on specific coordinates and set an initial zoom level
 var map = L.map('map').setView([21.147013181685043, 79.08010780802891], 13);

 // Add a base tile layer from OpenStreetMap
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
 }).addTo(map);

 // Load GeoJSON data using AJAX
 fetch('new_road.geojson')
     .then(function (response) {
         return response.json();
     })
     .then(function (data) {
         // Add the GeoJSON data to the map as a GeoJSON layer
         L.geoJSON(data).addTo(map);
     })
     .catch(function (error) {
         console.error('Error loading GeoJSON:', error);
     });