
// getter dan setter 
class Car{
    constructor(brand){
        // tanda _ menandakan artinya bersifat private dan menjadi property
        this._brand=brand;
    }
    get brand(){
        return this._brand;
    }
    set brand(x){
        return this._brand=x;
    }

}
let newCar= new Car("amasador");
console.log(newCar.brand)

// setter
newCar.brand='ambyar'
console.log(newCar.brand)