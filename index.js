const map = L.map('map')
map.setView([47.5101537757505, 19.03665249551403], 9);
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

let tableContents = {
    DHISTECH : `<table id="DHISTECH"><tr class="rows"><td class="table-data left">Kezdeményezett</td><td class="table-data right">3DHISTECH Fejlesztő Korlátolt Felelősségű Társaság</td></tr><tr class="rows"><td class="table-data left">Projekt címe</td><td class="table-data right">Összeszerelő üzem létesítése Kínában </td></tr><tr class="rows"><td class="table-data left">Célország</td><td class="table-data right">Kína</td></tr><tr class="rows"><td class="table-data left">Megvalósítási helyszín</td><td class="table-data right">Kína</td></tr></table>`,
    ADABAU : `<table id="ADABAU"><tr class="rows"><td class="table-data left">Kezdeményezett</td><td class="table-data right">"ADA-BAU" Kereskedelmi és Szolgáltató Korlátolt Felelősségű Társaság</td></tr><tr class="rows"><td class="table-data left">Projekt címe</td><td class="table-data right">Összeszerelő üzem létesítése Kínában </td></tr><tr class="rows"><td class="table-data left">Célország</td><td class="table-data right">Kína</td></tr><tr class="rows"><td class="table-data left">Megvalósítási helyszín</td><td class="table-data right">Kína</td></tr></table>`
}

const data = {
        DHISTECH : {
            name : "DHISTECH",
            coords: [47.514735772669646, 19.151116889143506],
            title: tableContents.DHISTECH,
            number : 1
        },
        ADABAU : {
            name : "ADABAU",
            coords: [47.11043721101071, 17.904032888864954],
            title: tableContents.ADABAU,
            number : 2
        }
}

const customIcon = L.icon({
    iconUrl: 'images\\pinpoint-marker.png',
    iconSize: [25, 55]
})


let counter = 1
for(key in data){
    const location = data[key]
    if(counter == location.number) {
        //console.log(`counter: ${counter}\tlocation.number: ${location.number}\t${location.title}`)
        markers.addLayer(L.marker(location.coords, {
                //title: location.title,
        icon: customIcon
        })  .bindPopup(`${location.title}`)
            .addTo(map)
        );
    }
    counter +=1
}



let cum = map.addLayer(markers);