function graduate(arr) {

        var output={}
        for (let i=0; i <arr.length; i++){
    
            let currenObject=arr[i];
            let namaclass=currenObject['class'];
            if(!output[namaclass]){
                output[namaclass]={name:currenObject.name,score:currenObject.score};
    
            }else {
                if (output[namaclass].class > currenObject.class){
                    objecsiap

                    if (currenObject.score >=85){

                        let objecsiap={name:currenObject.name,score:currenObject.score,grade:'Mastered'}
                        output[namaclass]=objecsiap

                    }else if (currenObject.score >60 && currenObject.score <85) {
                        let objecsiap={name:currenObject.name,score:currenObject.score,grade:'Completed'}
                        output[namaclass]=objecsiap


                    }else {

                        let objecsiap={name:currenObject.name,score:currenObject.score,grade:'Participated'}

                        output[namaclass]=objecsiap

                    }

                   
                    
                }
            }
        }
        return output;


    
    
    
    }


    var data = [

        {name:"Ahmad",score:80, class: "Laravel"},
        
        {name:"Regi",score:86, class: "Vuejs"},
        
        {name:"Robert",score:59, class: "Laravel"},
        
        {name:"Bondra",score:81, class: "Reactjs" }
        
        ];
    
    console.log(graduate(data))