class Car{
    constructor(brand){
        this._brand=brand;
    }
    get brand(){
        return this._brand;
    }
    set brand(x){
        this._brand=x;
    }
}
let newCard= new Car('amasador');
console.log(newCard.brand);
newCard.brand='ubah amasador';
console.log(newCard.brand);

