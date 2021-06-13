var hobbies=['sepak bola','basket','futsal','tenis meja']
// console.log(hobbies)
// console.log(hobbies[1])
// akses index terakhis
// console.log(hobbies[hobbies.length-1])

// tambahkan data di dalam array pada index terakhir
hobbies.push('games')

console.log(hobbies)
// hapus value index yang terakhir di dalam array
hobbies.pop()
console.log(hobbies)

// menambahakn value dalam array dengan posisi index paling awal
hobbies.unshift('reading')
console.log(hobbies)

// menghapus nilai untuk index pertama 
hobbies.shift()
console.log(hobbies)

// mengurutkan bilangan denan sorth
hobbies.sort()

console.log(hobbies)

// sort untuk angka random

var numbers=[10,2,5,7,8,9,22,45,67,23,98,60,45]
numbers.sort((a,b)=>a-b)
console.log(numbers)
console.log('============ splice ===================');

// penggunaan splice  nambar data pada index 1
var fruits=['banana','orange','manggo','alfucado'];
fruits.splice(1,0,'melon')
console.log(fruits)

// melakukan penghapusan sebanyak 2 element
fruits.splice(0,2);
console.log(fruits);

// pengunaan method split untuk memecah data menjadi sebuah array 
var biodata="name:jhone,doe";
let indexkoma=biodata.indexOf(",")

var hasilsplit=biodata.split(":")
console.log('========== hasil trim dan split=================')
console.log(hasilsplit)

// slice atau mengiris
console.log('=========== hasil slice =============');
var hasilsclice=fruits.slice(1,3);
console.log(hasilsclice);

// pengunaan method join yaitu kebalikan dari method split()
var title=["my","experience","as","programmer"];
var slug=title.join("-");
console.log(slug)

var arrayMulti=[[1,2,3],[4,5,6],[7,8,9]]
console.log(arrayMulti)

console.log(arrayMulti[1][0])