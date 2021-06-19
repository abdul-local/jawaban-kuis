// argesiasi memiliki parent dan child, saling menghubungkan 
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

}
// parent class
class Department {
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
// sebagai child
let guru1= new Teacher('guru1');
// sebagai parent
let defartment1= new Department('TEKNIK');

guru1.addStudents('abdul');
guru1.addStudents('haris');
defartment1.addTeachers(guru1);
console.log(defartment1.getTeachers());