
// tanpa destructuring
var array=[1,2,3];
var array1=array[0];
var array2=array[1];
var array3=array[2];

console.log('array1 :',array1);
console.log('array2 :',array2);
console.log('array3 :', array3);


// menggunakan destructuring lebih simple
const [pos1,pos2,pos3]=array;
console.log('pos1 :',pos1);
console.log('pos2 :',pos2);
console.log('pos3 :',pos3);


// rest paramter + spread operator
const score=[98,95,80,80,35,67];
const [number1,number2,...restValue]=score;
console.log('number1 :',number1);
console.log('number2 :',number2);
console.log('sisanya :',restValue);
