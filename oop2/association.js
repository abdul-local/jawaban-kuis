// berdiri sendiri tanpa ada parent dan child, artinya asosiasi sama-sama berdiri sendiri 
class Teacher {
    constructor(name){
        this._name=name;
        this._students=[];
    }
    get name(){
        return this._name;
    }
    set name(x){
        this._name=x;
    }
    addStudents(x){
        this._students.push(x);
    }
    getstudents(){
        return this._students;
    }
}

class Student{
    constructor(name){
        this._name=name;
        this._teachers=[];
    }
    get name(){
        return this._name;
    }
    set name(x){
        this._name=x;

    }
    addTeachers(x){
        this._teachers.push(x);

    }
    getTeachers(){
        return this._teachers;
    }
}

let abduh=new Teacher('abduh');
let abdul= new Student('abdul');
 abduh.addStudents(abdul.name);
 console.log(abduh)