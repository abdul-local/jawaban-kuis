
let array1 = ['one', 'two'];
let array2 = ['three', 'four'];
let array3 = ['five', 'six'];

let array5=array1.concat(array2).concat(array3);
console.log('cara concat: ',array5);

// cara spread operator
let array4=[...array1,...array2,...array3];
console.log('spread operator: ',array4);
