class Mail {
    constructor(){
        this.from='abdullah.hamzan@gmail.com';
    }

    sendMessage=function (msg,to) {
        return `message:${msg} to ${to}, from ${this.from}`;
        
    }
     
}


let newMail= new Mail();
console.log(newMail.sendMessage('hello','condet@gmail.com'));