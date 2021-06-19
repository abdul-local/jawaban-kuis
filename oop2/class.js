
class Car {
    constructor(brand,factory){
        this.brand=brand;
        this.factory=factory;
        this.sound='brem brem brem';
    }
    static sayHello(){
        console.log(' hey bro!!');
    }
    drver(){
        console.log(`enjoy your ride width ${this.brand}`);
    }
    break(){
        console.log(`please stoop`)
    }
}

// instance class 

let newCard= new Car('amasador','itali');
newCard.drver();
Car.sayHello();