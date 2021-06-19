 // cara 1
 
//  this._contack=[];
 class Mail {

    #contack=[];

    constructor(){
        

        this.from='abdul@gmail.com';
        // this.contack=[];
       
        this.otherProperty='the values';


    }
    
  get #x() { return this.#contack; }
    // sendMessage(msg,to){
    //     console.log(` you send: ${msg}, to ${to}, from ${this.from}`);
    //     this.contack.push(to);
    // }
 };

 let newMail= new Mail();
 console.log(newMail.#x());
//  newMail.sendMessage('good night', 'condet@gmail.com');
//  newMail.sendMessage('good morning', 'hamzan@gmail.com');

//  console.log(newMail.contack);

 // cara 2 
//  this._contactk=[];

//  function Mail2(){

//      this.from='abdullah.hamzan@gmail.com';
//      // ini bersifat private
//      var contactk=[];

//      this.outherValue='this outher value';
     
//  }

//  Mail2.prototype.sendMessage=function (msg,to) {
//     console.log(` you send: ${msg}, to ${to}, from ${this.from}`);
//     // this.contactk.push(to);
//     this._contactk.push(to);
     
//  }

//  let newEmail2= new Mail2();


//  newEmail2.sendMessage('hallo','adelio@gmail.com');
//  newEmail2.sendMessage('hallo','arimade@gmail.com');
//  console.log(newEmail2.contactk)
