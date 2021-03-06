export const facts = [
    'Koko pääkaupunkiseudun vanhin rakennus löytyy Vantaalta. Mikä se on? Pyhän Laurin kirkko eli Helsingin pitäjän kirkko, joka valmistui noin vuonna 1452.',
    'Missä Vantaalla sijaitsee Suomen suurin viherkatto? Toimisto- ja liikekeskus Dixin katolla. Viherkaton pinta-ala on 6300 m2.',
    'Tiesitkö, että vuodenvaihteessa 2016–2017 Vantaalla oli 15 henkilöä, jotka oli täyttänyt 100 vuotta!',
    'Tiesitkö paljonko Vantaalla oli traktoreita vuonna 2016, entä neljäkymmentä vuotta aiemmin? Vuonna 2016 traktoreita oli 2524, vuonna 1976 niitä taas oli 644.',
    'Tiesitkö että Martinlaaksossa sijaitsee 56 metriä korkea Martintorni. Vertailun vuoksi: Linnanmäen Raketti nousee 60 metrin korkeuteen ja Olympiastadionin torni on 72-metrinen.',
    'Vantaan kaupungin maatilojen hoidossa on noin 362 hehtaaria kaupungin omistamaa peltoalaa. Kuinka suurella alueella tästä peltoalasta kaupunki viljeli mallasohraa? 97 hehtaarilla eli vajaalla neljäsosalla.',
    'Tiesitkö, että Vantaalla sijaitseva Helsingin pitäjän kirkonkylä oli aiemmin koko pääkaupunkiseudun keskus? –Ennen Helsingin perustamista vuonna 1550 seudun keskuspaikka oli Helsingin pitäjän kirkonkylä.',
    'Tiesitkö, että Vantaalla on säilynyt useita keskiaikaisia kyliä? Tällaisia ovat esimerkiksi Dickursby (Tikkurila), Håkansböle (Hakunila), Övistsböle (Ylästö), Skattmansby (Veromiehenkylä) ja Sillböle (Silvola).',
    'Tiesitkö, että tiedekeskus Heurekan peruskiven sisältä löytyy muun muassa ääniä sisältävä cd-levy, jolla kuullaan myös erään presidentin puhe. Kenen? Mauno Koiviston.',
    'Tiesitkö, että Ruotsin kuningas söi pikniklounaan Vantaalla vuonna 1775? –Ruotsin kuningas Kustaa III pysähtyi vuonna 1775 Kuninkaantien varrelle syömään lounasta. Paikka tunnetaan nykyään nimellä Kuninkaanmäki.',
    'Tiesitkö, että Vantaalle tuotiin vuonna 1916 kiinalaista vankityövoimaa? –Vantaalle saapui syksyllä 1916 suuri joukko työvoimaa Kaukoidästä kaatamaan metsää venäläisten rakennuttamia maalinnoituksia varten.',
    'Tiesitkö, että Tikkurilan nimessä esiintyvä sana ”tikkuri” on vanha mittayksikkö? –Tikkuri oli mittayksikkö, jolla tarkoitettiin 10 oravannahkaa.',
    'Tiesitkö, että Suomen vanhin tiilinen asemarakennus on Vantaalla? –Se on vuonna 1862 rakennettu Tikkurilan vanha asema, jossa nykyään sijaitsee Vantaan kaupunginmuseo.',
    'Tiesitkö, että Vantaalla on asunut ihmisiä jo reilun 9000 vuoden ajan? –Kun Helsinki oli jääkauden jäljiltä vielä merenpinnan alla, kukoisti kivikauden elämä Vantaalla.',
    'Tiesitkö, että jo kivikaudella Vantaan keskuspaikat olivat Myyrmäki ja Tikkurila? Molemmilla paikoilla on tehty laajoja arkeologisia tutkimuksia.',
    'Tiesitkö, että keskiajalla Vantaan valtakieli oli ruotsi? –Keskiajan alussa 1200-luvulla Vantaalle muutti uudisasukkaita Ruotsista. Aina 1900-luvun alkupuoliskolle saakka Vantaan valtakielenä säilyi ruotsi.',
    'Tiesitkö, että kivikaudella Vantaalla on harjoitettu kannibalismia? –Kehäradan alle jääneen Hommaksen kivikautisen asuinpaikan kaivauksilta löytyi ihmisluita, joita näyttää leikellyn ja syödyn.',
    'Tiesitkö, että 1950-luvulla lentokentän kiitorataa rakentaessa jäi yli paljon tyhjiä asfalttitynnyreitä, joita otettiin hyötykäyttöön rakennusten Vantaalaisten kattoja rakentaessa.',
];

export const images = [
    require('../assets/images/carousel/AG_Tikkurilan_kirjasto4.png'),
    require('../assets/images/carousel/AG_lukukoira9.png'),
    require('../assets/images/carousel/AHa_Hakunilan_Skeittipuisto-9164.png'),
    require('../assets/images/carousel/AHa_tiksiblockparty-9491.png'),
    require('../assets/images/carousel/FS_Pitkakoski-18.png'),
    require('../assets/images/carousel/Lentokenttakallio-8842.png'),
    require('../assets/images/carousel/SLI-4500.png'),
    require('../assets/images/carousel/SLi-0418.png'),
    require('../assets/images/carousel/SLi-9655.png'),
    require('../assets/images/carousel/SM-Vantaa_kuvia-6003.png'),
    require('../assets/images/carousel/SMa_Hakunila-7701.png'),
    require('../assets/images/carousel/SMa_Kuusijarvi-1274.png'),
    require('../assets/images/carousel/SMa_Lentokone-0079.png'),
    require('../assets/images/carousel/SMa_Robolukio-9968.png'),
    require('../assets/images/carousel/SMa_Rockfest-6295.png'),
    require('../assets/images/carousel/SMa_Tikkurilan_tori_semmarit-6262.png'),
    require('../assets/images/carousel/martinlaakso_MG_7597.png'),
    require('../assets/images/carousel/myyrmaki_MG_2778.png'),
];

export const getRandomFacts = () => {
    const first = Math.floor(Math.random() * facts.length);
    let second = Math.floor(Math.random() * facts.length);
    while (second === first) {
        second = Math.floor(Math.random() * facts.length);
    }
    let third = Math.floor(Math.random() * facts.length);
    while (third === first || third === second) {
        third = Math.floor(Math.random() * facts.length);
    }
    return [facts[first], facts[second], facts[third]];
}

export const getRandomImages = () => {
    let first = Math.floor(Math.random() * images.length);
    let second = Math.floor(Math.random() * images.length);
    while (second === first) {
        second = Math.floor(Math.random() * images.length);
    }
    let third = Math.floor(Math.random() * images.length);
    while (third === first || third === second) {
        third = Math.floor(Math.random() * images.length);
    }
    return [images[first], images[second], images[third]];
}