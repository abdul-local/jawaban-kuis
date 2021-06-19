
const sapa=name=>{
    console.log(`halo selamat pagi,${name}`)
}

const convert=(name,domisi,umur)=>{
    let umur1=parseInt(umur)
    let object={name,domisi,umur1};
    return object;
}
const checkScore=(inputan)=>{
    let object={};
    let hasilSplit=inputan.split(",");
    for(let i=0; i<hasilSplit.length; i++){
        let currentVal=hasilSplit[i];
        let hasilSplit2=currentVal.split(":");
        let [key,value]=hasilSplit2;
        object[key]=value;
        
     
        
    }
    return object;
  
    
}
const filterData=(inputan)=>{
    let hasilAkhir=[];
    let data = [
        { name: "Ahmad", class: "adonis"},
        { name: "Regi", class: "laravel"},
        { name: "Bondra", class: "adonis"},
        { name: "Iqbal", class: "vuejs" },
        { name: "Putri", class: "Laravel" }
      ];
    for (let i=0; i<data.length; i++){
        let currentval=data[i];
        if(currentval.class==inputan){
            hasilAkhir.push(currentval);
        }

    }
    return hasilAkhir;

}

module.exports={sapa:sapa,convert:convert,checkScore:checkScore,filterData:filterData}