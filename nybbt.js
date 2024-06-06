/*function updateTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    var formattedTime = hours + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);

    document.getElementById("current-time").innerHTML = formattedTime;
  }
updateTime();
setInterval(updateTime, 100); //updateing every second (makes it look dynamic)


document.getElementById("search-btn").onclick = function() {
    let searchTerm = document.getElementById("search").value.toUpperCase()
    for(let i = 0; i <= Object.keys(data).length; i++){
        if(data[searchTerm].number == i){
            map.flyTo(data[searchTerm].coords, 17)
        }
    }
}

const map = L.map('map')
map.setView([47.50705146571801, 19.0456791857778], 15);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

function nybbtMap() {

    const tableContents_nybbt = {
        HODLER : `<table id="HODLER"><tr class="rows"><td class="table-data left">Kezdeményezett</td><td class="table-data right">Hodler Fruits Kft.</td></tr><tr class="rows"><td class="table-data left">Projekt címe</td><td class="table-data right">Folyik az adatok lekérése. Néhány másodperc múlva próbálkozzon újra a kivágással vagy a másolással.</td></tr><tr class="rows"><td class="table-data left">Célország</td><td class="table-data right">Szerbia</td></tr><tr class="rows"><td class="table-data left">Megvalósítási helyszín</td><td class="table-data right">Arilje</td></tr></table>`,
        KITE : `<table id="KITE"><tr class="rows"><td class="table-data left">Kezdeményezett</td><td class="table-data right">KITE Mezőgazdasági Szolgáltató és Kereskedelmi Zártkörűen Működő Részvénytársaság</td></tr><tr class="rows"><td class="table-data left">Projekt címe</td><td class="table-data right">A KITE Zrt. szerbiai beruházása</td></tr><tr class="rows"><td class="table-data left">Célország</td><td class="table-data right">Szerbia</td></tr><tr class="rows"><td class="table-data left">Megvalósítási helyszín</td><td class="table-data right">Csenej, Szávaszentdemeter</td></tr></table>`,
        KESZ : `<table id="KESZ"><tr class="rows"><td class="table-data left">Kezdeményezett</td><td class="table-data right">KÉSZ Holding Vállalkozásfejlesztő és Vagyonkezelő Zártkörű Részvénytársaság</td></tr><tr class="rows"><td class="table-data left">Projekt címe</td><td class="table-data right">KÉSZ Csoport Szerb Köztársaságban történő gazdasági tevékenységének fejlesztése </td></tr><tr class="rows"><td class="table-data left">Célország</td><td class="table-data right">Szerbia</td></tr><tr class="rows"><td class="table-data left">Megvalósítási helyszín</td><td class="table-data right">Belgrád</td></tr></table>`,
        REV : `<table id="REV"><tr class="rows"><td class="table-data left">Kezdeményezett</td><td class="table-data right">Rév Gázipari Kft.</td></tr><tr class="rows"><td class="table-data left">Projekt címe</td><td class="table-data right">A KRISTÁLY Kft. vajdasági telephely fejlesztése</td></tr><tr class="rows"><td class="table-data left">Célország</td><td class="table-data right">Szerbia</td></tr><tr class="rows"><td class="table-data left">Megvalósítási helyszín</td><td class="table-data right">Zenta</td></tr></table>`,
        REGINET : `<table id="REGINET"><tr class="rows"><td class="table-data left">Kezdeményezett</td><td class="table-data right">REGINET Nyugat-dunántúli Tanácsadó Korlátolt Felelősségű Társaság</td></tr><tr class="rows"><td class="table-data left">Projekt címe</td><td class="table-data right">Szimulátoros gépjárművezető-oktatás Szerbiában, Boszniában és Montenegróban</td></tr><tr class="rows"><td class="table-data left">Célország</td><td class="table-data right">Szerbia</td></tr><tr class="rows"><td class="table-data left">Megvalósítási helyszín</td><td class="table-data right">Szabadka</td></tr></table>`,
        SZEREMSEG : `<table id="SZEREMSEG"><tr class="rows"><td class="table-data left">Kezdeményezett</td><td class="table-data right">Szerémség Ingatlanfejlesztő Korlátolt Felelősségű Társaság</td></tr><tr class="rows"><td class="table-data left">Projekt címe</td><td class="table-data right">Bor, wellness és konferencia Hotel létesítése, a kiemelt turisztikai fejlesztési térséghez tartozó Karlócában</td></tr><tr class="rows"><td class="table-data left">Célország</td><td class="table-data right">Szerbia</td></tr><tr class="rows"><td class="table-data left">Megvalósítási helyszín</td><td class="table-data right">Karlóca</td></tr></table>`
    }
    
    const data_nybbt = {
        HODLER : {
            name : "HODLER",
            coords: [47.51750902665994, 19.054776082254627],
            title: tableContents_nybbt.HODLER,
            number : 1
        },
        KITE : {
            name : "KITE",
            coords : [47.01643907474422, 20.605741016103867],
            title : tableContents_nybbt.KITE,
            number : 2
        },
        KESZ : {
            name : "KESZ",
            coords : [47.470638956013495, 19.08242787976114],
            title : tableContents_nybbt.KESZ,
            number : 3
        },
        REV : {
            name : "REV",
            coords : [47.48277698903804, 19.121518171944796],
            title : tableContents_nybbt.REV,
            number : 4
        },
        REGINET : {
            name : "REGINET",
            coords : [47.687364580973444, 17.63147414255555],
            title : tableContents_nybbt.REGINET,
            number : 5
        },
        SZEREMSEG : {
            name : "SZEREMSEG",
            coords : [47.4399429634462, 18.752267555267668],
            title : tableContents_nybbt.SZEREMSEG,
            number : 6
        }
    
    }

    const customIcon = L.icon({
        iconUrl: 'images\\pinpoint-marker.png',
        iconSize: [15, 35]
    })

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

    let counter = 1
    for(key in data_nybbt){
        const location = data_nybbt[key]
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
    map.addLayer(markers);
    console.log("nybbt")
}*/