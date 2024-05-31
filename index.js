const map = L.map('map')
map.setView([47.5101537757505, 19.03665249551403], 15);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var markers = L.markerClusterGroup({
    iconCreateFunction: function (cluster) {
      var childCount = cluster.getChildCount();
      var content = "<div class='marker-cluster-number'>" + childCount + "</div>";
  
      return L.divIcon({
        html: content,
        className: 'marker-cluster'
      });
    }
  });

const data = {
    HEPA: {
        coords: [47.51015366794261, 19.036559441362126],
        title: "HEPA"
    },
    parliment: {
        coords: [47.50708596220176, 19.045706215252615],
        title: "<table><tr><th>Name</th><th>Hungarian Parliment</th></tr><tr><th>Built</th><th>1885</th></tr></table>"
    },
    örs: {
        coords: [47.50328319964548, 19.13629962199086],
        title: "Örs Vezér tere"
    },
    szolnok: {
        coords: [47.179357200331374, 20.175712254956014],
        title: "Szolnok <3"
    }
}

const customIcon = L.icon({
    iconUrl: 'images\\pinpoint-marker.png',
    iconSize: [25, 55]
})

for(key in data){
    const location = data[key]

    markers.addLayer(L.marker(location.coords, {
        title: location.title,
        icon: customIcon
    })  .bindPopup(`${location.title}`)
        .addTo(map)
    );
}

let cum = map.addLayer(markers);

