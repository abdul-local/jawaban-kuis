
function rangeWithStep(startNum, finishNum, step) {

    let data1=[]

    if (startNum > finishNum ){
        for (let i=startNum; i>=finishNum; i-=step){
            data1.push(i)
        }

    }

        for (let i=startNum; i<= finishNum; i+=step){
            data1.push(i)
        }
    
   
    return data1

    
}

console.log(rangeWithStep(1,10,2))
console.log(rangeWithStep(5,2,1))
