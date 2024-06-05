//initialize leaflet map
const map = L.map('map')
map.setView([47.50705146571801, 19.0456791857778], 15);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


//popup content for each company
const tableContents = {
    DHISTECH : `<table id="DHISTECH"><tr class="rows"><td class="table-data left">Kezdeményezett</td><td class="table-data right">3DHISTECH Fejlesztő Korlátolt Felelősségű Társaság</td></tr><tr class="rows"><td class="table-data left">Projekt címe</td><td class="table-data right">Összeszerelő üzem létesítése Kínában </td></tr><tr class="rows"><td class="table-data left">Célország</td><td class="table-data right">Kína</td></tr><tr class="rows"><td class="table-data left">Megvalósítási helyszín</td><td class="table-data right">Kína</td></tr></table>`,
    ADABAU : `<table id="ADABAU"><tr class="rows"><td class="table-data left">Kezdeményezett</td><td class="table-data right">"ADA-BAU" Kereskedelmi és Szolgáltató Korlátolt Felelősségű Társaság</td></tr><tr class="rows"><td class="table-data left">Projekt címe</td><td class="table-data right">Összeszerelő üzem létesítése Kínában </td></tr><tr class="rows"><td class="table-data left">Célország</td><td class="table-data right">Kína</td></tr><tr class="rows"><td class="table-data left">Megvalósítási helyszín</td><td class="table-data right">Kína</td></tr></table>`,
    AKTIV : `<table id="AKTIV"><tr class="rows"><td class="table-data left">Kezdeményezett</td><td class="table-data right">AKTÍV Ipari, Építőipari és Kereskedelmi Korlátolt Felelősségű Társaság</td></tr><tr class="rows"><td class="table-data left">Projekt címe</td><td class="table-data right">Betonacél- és lakatos feldolgozó, valamint mély- és közműépítési csarnoképület kivitelezése Szabadkán</td></tr><tr class="rows"><td class="table-data left">Célország</td><td class="table-data right">Szerbia</td></tr><tr class="rows"><td class="table-data left">Megvalósítási helyszín</td><td class="table-data right">Szabadka</td></tr></table>`,
    AUTOFLEX : `<table id="AUTOFLEX"><tr class="rows"><td class="table-data left">Kezdeményezett</td><td class="table-data right">AUTÓFLEX-KNOTT Közlekedési Eszközöket Gyártó Szolgáltató és Kereskedelmi Korlátolt Felelősségű Társaság</td></tr><tr class="rows"><td class="table-data left">Projekt címe</td><td class="table-data right">Technológiai-fejlesztés az AUTÓFLEX-KNOTT Kft.-nél</td></tr><tr class="rows"><td class="table-data left">Célország</td><td class="table-data right">Amerikai Egyesült Államok</td></tr><tr class="rows"><td class="table-data left">Megvalósítási helyszín</td><td class="table-data right">Magyarország: KecskemétUSA: Fox Lake (Wisconsin)</td></tr></table>`,
    UVEGSZIKLA : `<table id="UVEGSZIKLA"><tr class="rows"><td class="table-data left">Kezdeményezett</td><td class="table-data right">ÜVEGSZIKLA Kft.</td></tr><tr class="rows"><td class="table-data left">Projekt címe</td><td class="table-data right">Ingatlanfejlesztés Romániában</td></tr><tr class="rows"><td class="table-data left">Célország</td><td class="table-data right">Románia</td></tr><tr class="rows"><td class="table-data left">Megvalósítási helyszín</td><td class="table-data right">Ungheni</td></tr></table>`,
    BETONART : `<table id="BETONART"><tr class="rows"><td class="table-data left">Kezdeményezett</td><td class="table-data right">BETON-ART Mérnöki Szolgáltató és Kereskedelmi Korlátolt Felelősségű Társaság</td></tr><tr class="rows"><td class="table-data left">Projekt címe</td><td class="table-data right">5 csillagos wellness központ létrehozása</td></tr><tr class="rows"><td class="table-data left">Célország</td><td class="table-data right">Románia</td></tr><tr class="rows"><td class="table-data left">Megvalósítási helyszín</td><td class="table-data right">Gyergyóremete</td></tr></table>`,
    BHSTRANS : `<table id="BHSTRANS"><tr class="rows"><td class="table-data left">Kezdeményezett</td><td class="table-data right">BHS Trans Korlátolt Felelősségű Társaság</td></tr><tr class="rows"><td class="table-data left">Projekt címe</td><td class="table-data right">BHS Trans ingatlanfejlesztése Romániában</td></tr><tr class="rows"><td class="table-data left">Célország</td><td class="table-data right">Románia</td></tr><tr class="rows"><td class="table-data left">Megvalósítási helyszín</td><td class="table-data right">"Konstanca, Nagyvárad, Temesgyarmat"</td></tr></table>`,
    BOVIRA : `<table id="BOVIRA"><tr class="rows"><td class="table-data left">Kezdeményezett</td><td class="table-data right">”BOVIRA” Termelési és Kereskedelmi zártkörűen működő Részvénytársaság</td></tr><tr class="rows"><td class="table-data left">Projekt címe</td><td class="table-data right">Speciális hőszigetelő anyag gyártó üzem létesítése</td></tr><tr class="rows"><td class="table-data left">Célország</td><td class="table-data right">Horvátország</td></tr><tr class="rows"><td class="table-data left">Megvalósítási helyszín</td><td class="table-data right">Petrijevci (Petróc)</td></tr></table>`,
    BUDAVAL : `<table id="BUDAVAL"><tr class="rows"><td class="table-data left">Kezdeményezett</td><td class="table-data right">BUDAVAL Papírfeldolgozó Zártkörűen Működő Részvénytársaság</td></tr><tr class="rows"><td class="table-data left">Projekt címe</td><td class="table-data right">Exportpiaci potenciált növelő beruházás a BUDAVAL vállalatcsoportnál</td></tr><tr class="rows"><td class="table-data left">Célország</td><td class="table-data right">Románia</td></tr><tr class="rows"><td class="table-data left">Megvalósítási helyszín</td><td class="table-data right">Nemeszsuk (Jucu de Mijloc)</td></tr></table>`,
    CARDNET : `<table id="CARDNET"><tr class="rows"><td class="table-data left">Kezdeményezett</td><td class="table-data right">CARDNET Kártyarendszerek és -szolgáltatások Zártkörűen Működő Részvénytársaság</td></tr><tr class="rows"><td class="table-data left">Projekt címe</td><td class="table-data right">Mobiltelefon alapú bankkártyaelfogadási szolgáltatás kialakítása és piaci elterjesztése Romániában</td></tr><tr class="rows"><td class="table-data left">Célország</td><td class="table-data right">Románia</td></tr><tr class="rows"><td class="table-data left">Megvalósítási helyszín</td><td class="table-data right">Marosvásárhely</td></tr></table>`,
    COMTRANS : `<table id="COMTRANS"><tr class="rows"><td class="table-data left">Kezdeményezett</td><td class="table-data right">COMTRANS Kereskedelmi és Szolgáltató Korlátolt Felelősségű Társaság</td></tr><tr class="rows"><td class="table-data left">Projekt címe</td><td class="table-data right">Apartmanházak fejlesztése Vir szigeten</td></tr><tr class="rows"><td class="table-data left">Célország</td><td class="table-data right">Horvátország</td></tr><tr class="rows"><td class="table-data left">Megvalósítási helyszín</td><td class="table-data right">Vir</td></tr></table>`,
    CONTROLSOFT : `<table id="CONTROLSOFT"><tr class="rows"><td class="table-data left">Kezdeményezett</td><td class="table-data right">CONTROLSOFT-AUTOMATIKA Szolgáltató Korlátolt Felelősségű Társaság</td></tr><tr class="rows"><td class="table-data left">Projekt címe</td><td class="table-data right">Termelő üzemcsarnok létrehozása Csíkszeredában</td></tr><tr class="rows"><td class="table-data left">Célország</td><td class="table-data right">Románia</td></tr><tr class="rows"><td class="table-data left">Megvalósítási helyszín</td><td class="table-data right">Csíkszereda (Miercurea Ciuc)</td></tr></table>`,
    BATA : `<table id="BATA"><tr class="rows"><td class="table-data left">Kezdeményezett</td><td class="table-data right">DR. BATA Magyar-Kanadai Biotechnológiai Kutató Fejlesztő Zártkörűen Működő Részvénytársaság</td></tr><tr class="rows"><td class="table-data left">Projekt címe</td><td class="table-data right">A Dr. Bata Zrt. brazil piacának megerősítése célországbeli gyáregység létrahozása által</td></tr><tr class="rows"><td class="table-data left">Célország</td><td class="table-data right">Brazília</td></tr><tr class="rows"><td class="table-data left">Megvalósítási helyszín</td><td class="table-data right">Chapecó (Santa Catarina állam)</td></tr></table>`,
    DSC2000 : `<table id="DSC2000"><tr class="rows"><td class="table-data left">Kezdeményezett</td><td class="table-data right">DSC2000 Kereskedelmi és Szolgáltató Korlátolt Felelősségű Társaság</td></tr><tr class="rows"><td class="table-data left">Projekt címe</td><td class="table-data right">A DSC2000 Kft. külpiacra jutását segítő fémmegmunkáló üzem létesítése Szerbiában</td></tr><tr class="rows"><td class="table-data left">Célország</td><td class="table-data right">Szerbia</td></tr><tr class="rows"><td class="table-data left">Megvalósítási helyszín</td><td class="table-data right">Pétervárad</td></tr></table>`,
    COLORHELP : `<table id="COLORHELP"><tr class="rows"><td class="table-data left">Kezdeményezett</td><td class="table-data right">COLOR HELP Kivitelező és Szolgáltató Korlátolt Felelősségű Társaság</td></tr><tr class="rows"><td class="table-data left">Projekt címe</td><td class="table-data right">Konyhakész friss burgonya és steak burgonya feldolgozó üzem létrehozása</td></tr><tr class="rows"><td class="table-data left">Célország</td><td class="table-data right">Románia</td></tr><tr class="rows"><td class="table-data left">Megvalósítási helyszín</td><td class="table-data right">Gyergyóalfalu</td></tr></table>`,
    GEMTECH : `<table id="GEMTECH"><tr class="rows"><td class="table-data left">Kezdeményezett</td><td class="table-data right">GÉMTECH Gépészeti Mérnöki Technológiai Tervező és Gyártó Korlátolt Felelősségű Társaság</td></tr><tr class="rows"><td class="table-data left">Projekt címe</td><td class="table-data right">Fotovoltaikus napelempark létesítése Albániában</td></tr><tr class="rows"><td class="table-data left">Célország</td><td class="table-data right">Albánia</td></tr><tr class="rows"><td class="table-data left">Megvalósítási helyszín</td><td class="table-data right">Sheq Marinas</td></tr></table>`,
    GEOSPECIAL : `<table id="GEOSPECIAL"><tr class="rows"><td class="table-data left">Kezdeményezett</td><td class="table-data right">GEOSPECIÁL Építőipari és Szolgáltató Korlátolt Felelősségű Társaság</td></tr><tr class="rows"><td class="table-data left">Projekt címe</td><td class="table-data right">Alpesi hotel bővítése, szolgáltatásainak minőségi fejlesztése</td></tr><tr class="rows"><td class="table-data left">Célország</td><td class="table-data right">Ausztria</td></tr><tr class="rows"><td class="table-data left">Megvalósítási helyszín</td><td class="table-data right">Obergurgl-Hochgurgl (Sölden) </td></tr></table>`,
    ELSO : `<table id="ELSO"><tr class="rows"><td class="table-data left">Kezdeményezett</td><td class="table-data right">Első In-Management Ingatlan-üzemeltető Kft.</td></tr><tr class="rows"><td class="table-data left">Projekt címe</td><td class="table-data right">In-Management Kft. külpiaci fejlesztése</td></tr><tr class="rows"><td class="table-data left">Célország</td><td class="table-data right">Románia</td></tr><tr class="rows"><td class="table-data left">Megvalósítási helyszín</td><td class="table-data right">Marosvásárhely</td></tr></table>`,
    INNOSCITECH : `<table id="INNOSCITECH"><tr class="rows"><td class="table-data left">Kezdeményezett</td><td class="table-data right">Innoscitech Innovációs, Kutatási és Építőipari Korlátolt Felelősségű Társaság</td></tr><tr class="rows"><td class="table-data left">Projekt címe</td><td class="table-data right">Hasábburgonya üzem létesítése</td></tr><tr class="rows"><td class="table-data left">Célország</td><td class="table-data right">Románia</td></tr><tr class="rows"><td class="table-data left">Megvalósítási helyszín</td><td class="table-data right">Gyergyóremete</td></tr></table>`,
    KATKER : `<table id="KATKER"><tr class="rows"><td class="table-data left">Kezdeményezett</td><td class="table-data right">“KATKER 2005” Kereskedelmi, Vendéglátó és Szolgáltató Korlátolt Felelősségű Társaság</td></tr><tr class="rows"><td class="table-data left">Projekt címe</td><td class="table-data right">Külföldi piacra jutás támogatása a "KATKER 2005" Kft.-nél</td></tr><tr class="rows"><td class="table-data left">Célország</td><td class="table-data right">Amerikai Egyesült Államok</td></tr><tr class="rows"><td class="table-data left">Megvalósítási helyszín</td><td class="table-data right">Fort Lauerdale (Florida)</td></tr></table>`,
    KEPITA : `<table id="KEPITA"><tr class="rows"><td class="table-data left">Kezdeményezett</td><td class="table-data right">Kepita Kereskedelmi- Pénzügyi- Tanácsadó Korlátolt Felelősségű Társaság</td></tr><tr class="rows"><td class="table-data left">Projekt címe</td><td class="table-data right">Kepita Kft. külpiaci tevékenységének fejlesztése</td></tr><tr class="rows"><td class="table-data left">Célország</td><td class="table-data right">Horvátország</td></tr><tr class="rows"><td class="table-data left">Megvalósítási helyszín</td><td class="table-data right">Gradac</td></tr></table>`,
    KESZ : `<table id="KESZ"><tr class="rows"><td class="table-data left">Kezdeményezett</td><td class="table-data right">KÉSZ Holding Vállalkozásfejlesztő és Vagyonkezelő Zártkörű Részvénytársaság</td></tr><tr class="rows"><td class="table-data left">Projekt címe</td><td class="table-data right">KESZ Constructii Romania gyártóüzem létrehozása kapacitásbővítés érdekében</td></tr><tr class="rows"><td class="table-data left">Célország</td><td class="table-data right">Románia</td></tr><tr class="rows"><td class="table-data left">Megvalósítási helyszín</td><td class="table-data right">Várfalva</td></tr></table>`,
    KEVIEP : `<table id="KEVIEP"><tr class="rows"><td class="table-data left">Kezdeményezett</td><td class="table-data right">KEVIÉP Építőipari és Kereskedelmi Korlátolt Felelősségű Társaság</td></tr><tr class="rows"><td class="table-data left">Projekt címe</td><td class="table-data right">Regionális hulladékkezelő központ létrehozása Romániában</td></tr><tr class="rows"><td class="table-data left">Célország</td><td class="table-data right">Románia</td></tr><tr class="rows"><td class="table-data left">Megvalósítási helyszín</td><td class="table-data right">"Sepsiszentgyörgy, Nagyvárad"</td></tr></table>`,
    LASRAM : `<table id="LASRAM"><tr class="rows"><td class="table-data left">Kezdeményezett</td><td class="table-data right">LASRAM ENGINEERING Műszaki Fejlesztő Korlátolt Felelősségű Társaság</td></tr><tr class="rows"><td class="table-data left">Projekt címe</td><td class="table-data right">Különleges körülmények között alkalmazható CO2 és dióda sebészeti lézerberendezések fejlesztése, sebészeti lézergyártó kapacitás létesítése</td></tr><tr class="rows"><td class="table-data left">Célország</td><td class="table-data right">Németország</td></tr><tr class="rows"><td class="table-data left">Megvalósítási helyszín</td><td class="table-data right">Unterföhring</td></tr></table>`,
    MASTERPLAST : `<table id="LASRAM"><tr class="rows"><td class="table-data left">Kezdeményezett</td><td class="table-data right">MASTERPLAST Medical Gyártó és Kereskedelmi Korlátolt Felelősségű Társaság</td></tr><tr class="rows"><td class="table-data left">Projekt címe</td><td class="table-data right">Új gyártó kapacitás létrehozása a termelési kapacitás és a piacok ellátásnak biztonsága érdekében</td></tr><tr class="rows"><td class="table-data left">Célország</td><td class="table-data right">Szerbia</td></tr><tr class="rows"><td class="table-data left">Megvalósítási helyszín</td><td class="table-data right">Szabadka</td></tr></table>`,
    MEDICOR : `<table id="MEDICOR"><tr class="rows"><td class="table-data left">Kezdeményezett</td><td class="table-data right">MEDICOR Elektronika Zrt.</td></tr><tr class="rows"><td class="table-data left">Projekt címe</td><td class="table-data right">MEDICOR Zrt. külpiaci jelenlétének növelése Törökországban, az újszülött gyógyászati készülékek új gyártó-fejlesztő bázisának létesítésével</td></tr><tr class="rows"><td class="table-data left">Célország</td><td class="table-data right">Törökország</td></tr><tr class="rows"><td class="table-data left">Megvalósítási helyszín</td><td class="table-data right">Akyurt (Ankara)</td></tr></table>`,
    METAL : `<table id="METAL"><tr class="rows"><td class="table-data left">Kezdeményezett</td><td class="table-data right">METAL SHREDDER HUNGARY Zrt.</td></tr><tr class="rows"><td class="table-data left">Projekt címe</td><td class="table-data right">Technológiai üzemek kialakítása hazánkban és Szerbiában</td></tr><tr class="rows"><td class="table-data left">Célország</td><td class="table-data right">Szerbia</td></tr><tr class="rows"><td class="table-data left">Megvalósítási helyszín</td><td class="table-data right">Óbecse</td></tr></table>`,
    AIDA : `<table id="AIDA"><tr class="rows"><td class="table-data left">Kezdeményezett</td><td class="table-data right">A.I.D.A. Investments Ingatlanforgalmazó és -hasznosító Korlátolt Felelősségű Társaság</td></tr><tr class="rows"><td class="table-data left">Projekt címe</td><td class="table-data right">"Az A.I.D.A. Investments Kft. külpiacra lépése Horvátországban (korábban: A Miliana Property Kft. külpiacra lépése Horvátországban)"</td></tr><tr class="rows"><td class="table-data left">Célország</td><td class="table-data right">Horvátország</td></tr><tr class="rows"><td class="table-data left">Megvalósítási helyszín</td><td class="table-data right">Primošten</td></tr></table>`,
    MPP : `<table id="MPP"><tr class="rows"><td class="table-data left">Kezdeményezett</td><td class="table-data right">MPP Magyarország Informatikai Szolgáltató Zártkörűen Működő Részvénytársaság</td></tr><tr class="rows"><td class="table-data left">Projekt címe</td><td class="table-data right">"Ázsiai Fintech Platform</td></tr><tr class="rows"><td class="table-data left">Célország</td><td class="table-data right">Szingapúr</td></tr><tr class="rows"><td class="table-data left">Megvalósítási helyszín</td><td class="table-data right">Szingapúr</td></tr></table>`,
    OLP : `<table id="OLP"><tr class="rows"><td class="table-data left">Kezdeményezett</td><td class="table-data right">OLP-TECH Gyártó, Szerelő és Szolgáltató Korlátolt Felelősségű Társaság</td></tr><tr class="rows"><td class="table-data left">Projekt címe</td><td class="table-data right">BG_Chernogorvo OvchepoltsiSolar Park</td></tr><tr class="rows"><td class="table-data left">Célország</td><td class="table-data right">Bulgária</td></tr><tr class="rows"><td class="table-data left">Megvalósítási helyszín</td><td class="table-data right">Pozharevo</td></tr></table>`,
    OPENWARE : `<table id="OPENWARE"><tr class="rows"><td class="table-data left">Kezdeményezett</td><td class="table-data right">Openware-SBS Kutatás-fejlesztési Beruházó és Üzemeltető Zrt.</td></tr><tr class="rows"><td class="table-data left">Projekt címe</td><td class="table-data right">Zöldhulladék és szerves hulladék feldolgozásával létrehozott Nitrogén‐foszfor‐kálium tartalmú szilárd kompaktált műtrágya keveréket előállító üzem</td></tr><tr class="rows"><td class="table-data left">Célország</td><td class="table-data right">Szerbia</td></tr><tr class="rows"><td class="table-data left">Megvalósítási helyszín</td><td class="table-data right">"Szerbia: Doline (Völgyes),Magyarország: Miskolc</td></tr></table>`,
    OPTIWELLA : `<table id="OPTIWELLA"><tr class="rows"><td class="table-data left">Kezdeményezett</td><td class="table-data right">OPTIWELLA Kereskedelmi és Szolgáltató Kft.</td></tr><tr class="rows"><td class="table-data left">Projekt címe</td><td class="table-data right">Új generációs gyártó és kiszolgáló kapacitások kialakítása a jövő telekommunkációs eszköz felújító üzemében</td></tr><tr class="rows"><td class="table-data left">Célország</td><td class="table-data right">Amerikai Egyesült Államok</td></tr><tr class="rows"><td class="table-data left">Megvalósítási helyszín</td><td class="table-data right">Magyarország: Szeged, USA: n.a</td></tr></table>`,
    RESILUX : `<table id="RESILUX"><tr class="rows"><td class="table-data left">Kezdeményezett</td><td class="table-data right">Resilux Közép-Európa Csomagolástechnikai Korlátolt Felelősségű Társaság</td></tr><tr class="rows"><td class="table-data left">Projekt címe</td><td class="table-data right">A Resilux Közép-Európa Csomagolástechnikai Kft. Budapest és a Resilux Packaging South-East Europe S.r.l. Dascalu közös kapacitás fejlesztése</td></tr><tr class="rows"><td class="table-data left">Célország</td><td class="table-data right">Románia</td></tr><tr class="rows"><td class="table-data left">Megvalósítási helyszín</td><td class="table-data right">Magyarország: Tuzsér, Románia: Dascalu</td></tr></table>`,
    RICHTER : `<table id="RICHTER"><tr class="rows"><td class="table-data left">Kezdeményezett</td><td class="table-data right">Richter Gedeon Vegyészeti Gyár Nyilvánosan Működő Rt.</td></tr><tr class="rows"><td class="table-data left">Projekt címe</td><td class="table-data right">GEDEON RICHTER Polska gyártókapacitásának növelését célzó eszközbeszerzések</td></tr><tr class="rows"><td class="table-data left">Célország</td><td class="table-data right">Lengyelország</td></tr><tr class="rows"><td class="table-data left">Megvalósítási helyszín</td><td class="table-data right">Grodzisk Mazowiecki</td></tr></table>`,
    STARKER : `<table id="STARKER"><tr class="rows"><td class="table-data left">Kezdeményezett</td><td class="table-data right">STARKER-ENGINEERING Tervező és Szolgáltató Korlátolt Felelősségű Társaság</td></tr><tr class="rows"><td class="table-data left">Projekt címe</td><td class="table-data right">Full-fat szójafeldolgozó és folyékony műtrágyakeverő üzem létrehozása</td></tr><tr class="rows"><td class="table-data left">Célország</td><td class="table-data right">Szlovákia</td></tr><tr class="rows"><td class="table-data left">Megvalósítási helyszín</td><td class="table-data right">Somotor</td></tr></table>`,
    SZIGEPSZERK : `<table id="SZIGEPSZERK"><tr class="rows"><td class="table-data left">Kezdeményezett</td><td class="table-data right">SZIGÉPSZERK Építőipari és Szolgáltató Kft.</td></tr><tr class="rows"><td class="table-data left">Projekt címe</td><td class="table-data right">Burgonyapehely üzem létesítése </td></tr><tr class="rows"><td class="table-data left">Célország</td><td class="table-data right">Románia</td></tr><tr class="rows"><td class="table-data left">Megvalósítási helyszín</td><td class="table-data right">Gyergyóremete</td></tr></table>`,
    TRADIS : `<table id="TRADIS"><tr class="rows"><td class="table-data left">Kezdeményezett</td><td class="table-data right">TRADIS Zártkörűen Működő Részvénytársaság</td></tr><tr class="rows"><td class="table-data left">Projekt címe</td><td class="table-data right">A TRADIS Zrt. külpiaci szerepvállalásának növelése Szerbiában</td></tr><tr class="rows"><td class="table-data left">Célország</td><td class="table-data right">Szerbia</td></tr><tr class="rows"><td class="table-data left">Megvalósítási helyszín</td><td class="table-data right">Szabadka, Simanovci</td></tr></table>`,
    TTRANS : `<table id="TTRANS"><tr class="rows"><td class="table-data left">Kezdeményezett</td><td class="table-data right">T-TRANS FŐÉP Építőipari, Kivitelező és Szállítmányozó Korlátolt Felelősségű Társaság</td></tr><tr class="rows"><td class="table-data left">Projekt címe</td><td class="table-data right">Kül- és belföldön megvalósítandó termelő beruházás a T-TRANS FŐÉP Kft-nél</td></tr><tr class="rows"><td class="table-data left">Célország</td><td class="table-data right">Amerikai Egyesült Államok</td></tr><tr class="rows"><td class="table-data left">Megvalósítási helyszín</td><td class="table-data right">Magyarország: Ecser, USA: Miami</td></tr></table>`,
    VERARBEITEN : `<table id="VERARBEITEN"><tr class="rows"><td class="table-data left">Kezdeményezett</td><td class="table-data right">“VERARBEITEN PAUSITS” Termelő, Szolgáltató és Kereskedelmi Korlátolt Felelősségű Társaság</td></tr><tr class="rows"><td class="table-data left">Projekt címe</td><td class="table-data right">Komplex beruházás megvalósítása a MSC MetPro a.s.-nél a fémmegmunkálási beszállítói kapacitások megerősítése, a "VERARBEITEN PAUSITS" Kft. külpiaci terjeszkedése érdekében</td></tr><tr class="rows"><td class="table-data left">Célország</td><td class="table-data right">Csehország</td></tr><tr class="rows"><td class="table-data left">Megvalósítási helyszín</td><td class="table-data right">Ostrava</td></tr></table>`,
    VIDEOTON : `<table id="VIDEOTON"><tr class="rows"><td class="table-data left">Kezdeményezett</td><td class="table-data right">VIDEOTON HOLDING Zrt.</td></tr><tr class="rows"><td class="table-data left">Projekt címe</td><td class="table-data right">Kapacitásbővítő és a gyártási folyamatok Ipar 4.0 megoldásait megvalósító beruházás a VEAS Bulgaria EOOD-nál Bulgáriában, a Videoton Holding ZRt. külpiaci szerepvállalásának fokozása céljából</td></tr><tr class="rows"><td class="table-data left">Célország</td><td class="table-data right">Bulgária</td></tr><tr class="rows"><td class="table-data left">Megvalósítási helyszín</td><td class="table-data right">Stara Zagora</td></tr></table>`,
    WATEREX : `<table id="WATEREX"><tr class="rows"><td class="table-data left">Kezdeményezett</td><td class="table-data right">WATEREX INVEST Zártkörűen Működő Részvénytársaság</td></tr><tr class="rows"><td class="table-data left">Projekt címe</td><td class="table-data right">"Úszómóló összeszerelő és motorosyacht, valamint hajótest építő telephely létesítése az Adrián (Eredeti cím: Úszómóló összeszerelő telephely létesítése az Adrián)"</td></tr><tr class="rows"><td class="table-data left">Célország</td><td class="table-data right">Horvátország</td></tr><tr class="rows"><td class="table-data left">Megvalósítási helyszín</td><td class="table-data right">Obrovac</td></tr></table>`,
    ZEA : `<table id="ZEA"><tr class="rows"><td class="table-data left">Kezdeményezett</td><td class="table-data right">Zea Manó Kft.</td></tr><tr class="rows"><td class="table-data left">Projekt címe</td><td class="table-data right">Bordázott acél gégecső és rejtett-zsaluzati lemez kiegészítők gyártása modern és hatékony építőipari felhasználásra.</td></tr><tr class="rows"><td class="table-data left">Célország</td><td class="table-data right">Szlovákia</td></tr><tr class="rows"><td class="table-data left">Megvalósítási helyszín</td><td class="table-data right">Szepsi</td></tr></table>`,
    HARGITAGRO : `<table id="HARGITAGRO"><tr class="rows"><td class="table-data left">Kezdeményezett</td><td class="table-data right">HargitAgro Korlátolt Felelősségű Társaság</td></tr><tr class="rows"><td class="table-data left">Projekt címe</td><td class="table-data right">Konyhakész friss burgonya és steak burgonya feldolgozó üzem létrehozása</td></tr><tr class="rows"><td class="table-data left">Célország</td><td class="table-data right">Románia</td></tr><tr class="rows"><td class="table-data left">Megvalósítási helyszín</td><td class="table-data right">Gyergyóalfalu</td></tr></table>`
}


//data about each company
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
        },
        AKTIV : {
            name : "AKTIV",
            coords: [46.42097093169025, 19.18014027774123],
            title: tableContents.AKTIV,
            number : 3
        },
        AUTOFLEX : {
            name : "AUTOFLEX",
            coords : [46.88082312729003, 19.633125839264107],
            title : tableContents.AUTOFLEX,
            number : 4
        },
        UVEGSZIKLA : {
            name : "UVEHSZIKLA",
            coords : [47.5138431839098, 19.075708268862858],
            title : tableContents.UVEGSZIKLA,
            number : 5
        },
        BETONART : {
            name : "BETONART",
            coords : [47.40606965137244, 18.82274216823566],
            title : tableContents.BETONART,
            number : 6
        },
        BHSTRANS : {
            name : "BHSTRANS",
            coords : [47.611569907203084, 19.120421547862843],
            title : tableContents.BHSTRANS,
            number : 7
        },
        BOVIRA : {
            name : "BOVIRA",
            coords : [46.192904447085574, 20.168903462621973],
            title : tableContents.BOVIRA,
            number : 8
        },
        BUDAVAL : {
            name : "BUDAVAL",
            coords : [47.41048630229329, 19.0349153547442],
            title : tableContents.BUDAVAL,
            number : 9
        },
        CARDNET : {
            name : "CARDNET",
            coords : [47.53009490094233, 19.085063835699692],
            title : tableContents.CARDNET,
            number : 10
        },
        COMTRANS : {
            name : "COMTRANS",
            coords : [48.07956136178421, 20.765096664039035],
            title : tableContents.COMTRANS,
            number : 11
        },
        CONTROLSOFT : {
            name : "CONTROLSOFT",
            coords : [47.09607282558173, 17.924137757913176],
            title : tableContents.CONTROLSOFT,
            number : 12
        },
        BATA : {
            name : "BATA",
            coords : [47.30746539323555, 19.213521225903328],
            title : tableContents.BATA,
            number : 13
        },
        DSC2000 : {
            name : "DSC2000",
            coords : [47.94030215539671, 21.73974825476861],
            title : tableContents.DSC2000,
            number : 14
        },
        COLORHELP : {
            name : "COLORHELP",
            coords : [47.44748048225833, 18.999239255268037],
            title : tableContents.COLORHELP,
            number : 15
        },
        GEMTECH : {
            name : "GEMTECH",
            coords : [47.94715169829437, 21.836797168260684],
            title : tableContents.GEMTECH,
            number : 16
        },
        GEOSPECIAL : {
            name : "GEOSPECIAL",
            coords : [47.50782232123901, 19.02816838410689],
            title : tableContents.GEOSPECIAL,
            number : 17
        },
        ELSO : {
            name : "ELSO",
            coords : [47.55948573339531, 19.085776912945448],
            title : tableContents.ELSO,
            number : 18
        },
        INNOSCITECH : {
            name : "INNOSCITECH",
            coords : [47.401277114225365, 18.87941710077716],
            title : tableContents.INNOSCITECH,
            number : 19
        },
        KATKER : {
            name : "KATKER",
            coords : [47.590679057367694, 21.629610329621983],
            title : tableContents.KATKER,
            number : 20
        },
        KEPITA : {
            name : "KEPITA",
            coords : [47.50138918159865, 19.116141608715044],
            title : tableContents.KEPITA,
            number : 21
        },
        KESZ : {
            name : "KESZ",
            coords : [46.89837093556978, 19.67357038355694],
            title : tableContents.KESZ,
            number : 22
        },
        KEVIEP : {
            name : "KEVIEP",
            coords : [47.521429606004034, 21.655236946816075],
            title : tableContents.KEVIEP,
            number : 23
        },
        LASRAM : {
            name : "LASRAM",
            coords : [47.605782365859774, 19.103293804697692],
            title : tableContents.LASRAM,
            number : 24
        },
        MASTERPLAST : {
            name : "MASTERPLAST",
            coords : [47.15068203147464, 18.34196288171559],
            title : tableContents.MASTERPLAST,
            number : 25
        },
        MEDICOR : {
            name : "MEDICOR", 
            coords : [47.45380917418247, 19.099317183582297],
            title : tableContents.MEDICOR,
            number : 26
        },
        METAL : {
            name : "METAL",
            coords : [47.42132938780652, 19.121359179718052],
            title : tableContents.METAL,
            number : 27
        },
        AIDA : {
            name : "AIDA",
            coords : [47.478611327123666, 19.129826596642026],
            title : tableContents.AIDA,
            number : 28
        },
        MPP : {
            name : "MPP",
            coords : [47.49184432112156, 19.02231447807562],
            title : tableContents.MPP,
            number : 29
        },
        OLP : {
            name : "OLP",
            coords : [48.09401136211665, 20.725167216153665],
            title : tableContents.OLP,
            number : 30
        },
        OPENWARE : {
            name : "OPENWARE",
            coords : [46.92159487132089, 18.980063862133008],
            title : tableContents.OPENWARE,
            number : 31
        },
        OPTIWELLA : {
            name : "OPTIWELLA",
            coords : [46.261806204405175, 20.104258039347457],
            title : tableContents.OPTIWELLA,
            number : 32
        },
        RESILUX : {
            name : "RESILUX",
            coords : [47.50680626065041, 19.063610773798768],
            title : tableContents.RESILUX,
            number : 33
        },
        RICHTER : {
            name : "RICHTER",
            coords : [47.472569696240775, 19.139379983583122],
            title : tableContents.RICHTER,
            number : 34
        },
        STARKER : {
            name : "STARKER",
            coords : [48.014714373125, 22.04105352101388],
            title : tableContents.STARKER,
            number : 35
        },
        SZIGEPSZERK : {
            name : "SZIGEPSZERK",
            coords : [47.389490996408895, 18.841040389137692],
            title : tableContents.SZIGEPSZERK,
            number : 36
        },
        TRADIS : {
            name : "TRADIS",
            coords : [46.40989717669965, 20.360688185021566],
            title : tableContents.TRADIS,
            number : 37
        },
        TTRANS : {
            name : "TTRANS",
            coords : [47.52655081933553, 19.03231541798019],
            title : tableContents.TTRANS,
            number : 38
        },
        VERARBEITEN : {
            name : "VERARBEITEN",
            coords : [47.88798284733061, 17.340630681613312],
            title : tableContents.VERARBEITEN,
            number : 39
        },
        VIDEOTON : {
            name : "VIDEOTON",
            coords : [47.52412801850356, 18.986292225841694],
            title : tableContents.VIDEOTON,
            number : 40
        },
        WATEREX : {
            name : "WATEREX",
            coords : [47.4678642732639, 19.051873882252263],
            title : tableContents.WATEREX,
            number : 41
        },
        ZEA : {
            name : "ZEA",
            coords : [48.09282952491444, 20.720309768789434],
            title : tableContents.ZEA,
            number : 42
        },
        HARGITAGRO : {
            name : "HARGITAGRO",
            coords : [47.5322811873859, 19.186331265005574],
            title : tableContents.HARGITAGRO,
            number : 43
        }
}

//creating custom markers
const customIcon = L.icon({
    iconUrl: 'images\\pinpoint-marker.png',
    iconSize: [15, 35]
})

//creating marker clusters 
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


//adding the markers to map and fetching the information about the companies
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

let finalmap = map.addLayer(markers);

//adding time
function updateTime() {
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

function changeMaps() {
    let counter = 0
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
}