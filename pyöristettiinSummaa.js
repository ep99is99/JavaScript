price = 19.56789;
let oikea_hinta = price.toFixed(2);
//Muuntaa desimaaliluvuksi tulostuneen merkkijonon(string)
oikea_hinta = parseFloat(oikea_hinta);
//Muuntaa kokonaisluvuksi
hintax = parseInt(oikea_hinta);
//Tulostaa hinnat
console.log("Hinta ilman desimaaleja: " + hintax);

console.log("Hinta 2 desimaalilla: " + oikea_hinta);
