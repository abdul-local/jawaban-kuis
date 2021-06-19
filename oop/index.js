const Email={
    from:'abdullah.hamzan@gmail.com',
    // method harus menggunakan express function
    sendMessage:function(msg,to){

        return `message: ${msg} send to ${to} from ${this.from}`;


    }
}
console.log(Email.from)

let pesan= Email.sendMessage('pleas help me!','condet@gmail.com')
console.log(pesan)
Email.saveContact=function(addContact) {
    console.log(`email save ${addContact}`);
    

}
Email.saveContact('abdul');

