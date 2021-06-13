let firstName='javascript';
let lastName='LANGUAGE'

let hasilconcat=firstName.concat(lastName);
console.log(hasilconcat);
let indexOfT=firstName.indexOf('t');
console.log(indexOfT);
let panjangFirstName=firstName.length;
console.log(panjangFirstName);

var motor1='beat';
var motor2='yamaha';

// ambil data string dari niia beat "at" saja;
let at=motor1.substr(2,2);
console.log(at)
// ubah nilai firtName dari javasrcipt menjadi huruf besar semua
let hurufbesar=firstName.toUpperCase();
let hurufkecil=lastName.toLowerCase();
console.log(hurufbesar);
console.log(hurufkecil);

// pengunaan trim yaitu pengembalian string yang baru yang sudah dihapus karakter whitespace("") pada awal dan akhir string
var username= 'administrator ';
var newusername=username.trim();
console.log(username)
console.log(newusername);


var int = 12;
var real =3.45;
var arry =[1,2,3];

// ubah semuanya ke dalam bentuk string
let newInt=int.toString()

let newreal=real.toString()

let newArray=arry.toString()
console.log(newArray)
console.log(newInt)

var strint='89'
console.log(strint)
let parseStringInt=parseInt(strint);
console.log(parseStringInt);




