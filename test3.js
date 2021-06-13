function tandaiA(str) {

    // code di sini
    let data=str;
    let hasilAkhir=[];
    for (let i=0; i <data.length; i++){
        let hasil=data[i];
        let hasil2=hasil.toLowerCase();
        if (hasil2=='a'){
         
            hasilAkhir.push('x')

        }
        hasilAkhir.push(hasil2)



    }
    let hasilAkhir2=hasilAkhir.filter(item=>item!=='a');
    
    return hasilAkhir2.join('');
    
    
    
    

    
    }

console.log(tandaiA('abdulwqdwaaaa'));