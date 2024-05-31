//defining the map and setting a center (HEPA)
var map = L.map('map').setView([47.5101537757505, 19.03665249551403], 15);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//icon class for style reusability
var greenIcon = L.icon({
    iconUrl: 'images/pinpoint-marker.png',

    iconSize:     [38, 95], // size of the icon in pixels (width, height)
    iconAnchor:   [22, 94], // anchoring marker's "tip" (xd) relative to top left corner
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

hepa_marker = L.marker([47.5101537757505, 19.03665249551403], {icon: greenIcon}).addTo(map);
hepa_marker.bindPopup("HEPA");