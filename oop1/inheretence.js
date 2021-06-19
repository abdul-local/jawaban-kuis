
class Car{
    constructor(brand){
        this.brand=brand;
    }
    present(){
        return ` I have a ${this.brand}`
    }


}
class Car2 extends Car{
    constructor(brand,mod){
        super(brand);
        this.model=mod;
    }
    show(){
        return `${this.present()}, it is a ${this.model}`
    }


}
let mycard= new Car2('amasador','eropa');
console.log(mycard.show());
