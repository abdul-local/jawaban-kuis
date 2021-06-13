function kelompokAngka(arr){

    //Code disini
  
    
    let hasil=[];

    let data=arr;
    let array1=[]
    let array2=[]
    let array3 =[]

    for (let i=0; i<data.length; i++){
        let current=data[i];
       
       
       

        if (current % 2==1){

            if (current %3 ==0){
                array3.push(current)

            }else {
                array1.push(current);
              
            }
          
           
           
           
            
        }else {
            

            array2.push(current);
           
            
           
        }
       


        
        
        
    }

    hasil.push(array2)
    hasil.push(array1)
    hasil.push(array3)
  
    return hasil;
    

    
    }
    console.log(kelompokAngka([1,2,3,4,5,6,7]))

