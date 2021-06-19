
function init() {

    let name='abdul';

    function sayHelo() {
        console.log(` Hello, My name is ${name}`)
        
    }

    return sayHelo();
    
}
init();

function add() {
    let count=0;
    return ()=>{
        return count+=1;
    }
    
}
let addCount=add();

console.log(addCount())
console.log(addCount())
console.log(addCount())