var map = L.map('map').setView([13.0827, 80.2707], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © OpenStreetMap contributors'
}).addTo(map);

// 🔴 High Risk Zone
L.circle([13.0827, 80.2707], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.4,
    radius: 200
}).addTo(map)
.bindPopup("⚠️ High Risk Zone");

// 🟠 Medium Risk Zone
L.circle([13.07, 80.27], {
    color: 'orange',
    fillColor: '#ff9800',
    fillOpacity: 0.4,
    radius: 150
}).addTo(map)
.bindPopup("⚠️ Medium Risk Zone");
