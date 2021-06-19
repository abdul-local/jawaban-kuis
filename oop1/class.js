
// cara buat class
class Car {
    constructor(brand,factory){
        this.brand=brand;
        this.factory=factory;
        // property
        this.sound='ngeng ngeng ngeng'

    }
    drive(){
        console.log(`keep enoy your drive ${this.brand} `)
    }
    break(){
        console.log('pleass berhenti dong');
    }


}
// cara instance varibel sehingga menjadi sebuah object
let newCar= new Car('amazador','cina');
console.log(newCar);
let newCar2= new Car('lamborgini','amerika')

newCar.drive();
newCar2.drive();



var Animal=class {
    constructor(nama,tipe){
        this.nama=nama;
        this.tipe=tipe;
    }

    // langsung bisa di akses dari kelas
    static syHello(){
        console.log('hello bro');
    }
}

Animal.syHello();


