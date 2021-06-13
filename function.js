
function tampilan() {

    console.log('hello word')
    
}

tampilan()

function muculangkaDua() {
    
    return 2;
    
}

let tampung=muculangkaDua()
console.log(tampung)

function DuakaliDua(dua) {
    return dua*2;

    
}
let hasil=DuakaliDua(2)
console.log(hasil)

function Penjumlahan(nilai1,nilai2) {

    return nilai1+nilai2

    
}

let hasilPenjumlahan=Penjumlahan(4,4)
console.log(hasilPenjumlahan)

function defualTampilan(angka=1) {
    return angka;
    
}
let tampilandefault=defualTampilan();
console.log(tampilandefault);

let perkalian=function (a,b) {
    return a*b;
    
}
console.log(perkalian(2,2))