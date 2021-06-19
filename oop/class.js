function Mail() {

    this.from='abdullah.hamzan@gmail.com';


    
}
// leih bagus dari segi alokasi memori yang digunakan
Mail.prototype.sendMessage=function (msg,to) {
    return `message:${msg} to ${to}, from ${this.from}`;
    
}

let newMail= new Mail();
console.log(newMail.sendMessage('hello','condet@gmail.com'));