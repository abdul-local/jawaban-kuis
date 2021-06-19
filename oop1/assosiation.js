
class Teacher{
    constructor(name){
        this._name=name;
        this._students=[];
    }
    addStudents(x){
        this._students.push(x);
    }
    get students(){

        return this._students;
    }

}

class Student{

    constructor(name){
        this._name=name;
        this._teachers=[];

    
    }
    addTeachers(x){
        this._teachers.push(x);
    }
    get teachers(){
        return this._teachers;
    }
}
let guru = new Teacher('abdul');
let murid= new Student('hamzan');
guru.addStudents('siswa baru');
murid.addTeachers('guru baru');
guru.addStudents(murid)
console.log('guru :',guru);
console.log(guru.students)
// console.log('murid :',murid);
