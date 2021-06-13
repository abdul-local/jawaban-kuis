function hitungVokal(str){

    let hasilAkhir=[];
    let name=str;
    for ( let i=0; i< name.length; i++){
       

        let hasil=name[i];
        let hasil2=hasil.toLowerCase();
        if (hasil2=='a'){
            hasilAkhir.push(hasil2)
        }
        if(hasil2=='i'){
            hasilAkhir.push(hasil2)
        }
        if(hasil2=='u'){
            hasilAkhir.push(hasil2)
        }
        if(hasil2=='e'){
            hasilAkhir.push(hasil2)
        }
        if(hasil2=='o'){
            hasilAkhir.push(hasil2)
        }

     

        
    }
   return  hasilAkhir.length;


   
    }

console.log(hitungVokal('Adonis'));
