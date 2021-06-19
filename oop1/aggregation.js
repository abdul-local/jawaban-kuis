class Teacher {

    constructor(name){
        this._name=name;
        this._students=[];

    }
    addStudents(x){
        this._teachers.push(x);
        
    }
    get students(){
        return this._students;

    }
    

}

class Department {
    constructor(name){
        this._name=name;
        this._teachers=[];
    }
    assignTeacher(teacher){
        this._teachers.push(teacher);

    }
    get teachers(){
        return this._teachers;
    }

}

// Object Creation
const abdul = new Teacher("abdul")
const teknik = new Department("teknik")

teknik.assignTeacher(abdul)
console.log(teknik.teachers)