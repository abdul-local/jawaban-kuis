// kelengkapan dari agresiasinya, memiliki parent child,dll.. seperti tahapan membuat kue
class Department{
    constructor(name){
        this._name=name;
        this._teachers=[];
    }
    get name(){
        return this._name;
    }
    set name(x){
        this._name;x;
    }
    addTeacher(x){
        this._teachers.push(x)

    }
    getTeachers(){
        return this._teachers;
    }
}

class University {
    constructor(name){
        this._name=name;
        this._departments=[];
    }
    get name(){
        return this._name;
    }
    set name(x){
        return this._name=x;

    }
    addDepartments(x){
        this._departments.push(x);
    }
    get departments(){
        return this._departments;
    }
}

let university1=new University('university1');
university1.addDepartments('TEKNIK');
console.log(university1.departments)