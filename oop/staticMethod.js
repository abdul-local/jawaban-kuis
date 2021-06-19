class Mail {

    static isValidPhone(number){

        return typeof number==='number';
      
    }
 

}

// artinya tidak perlu di instance
console.log(Mail.isValidPhone(089344));