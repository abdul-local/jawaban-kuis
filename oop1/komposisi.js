
  class Department {
  
    constructor(name) {
  
      this._name = name
  
      this._teachers = []
  
    }
  
    assignTeacher(teacher) {
  
      this._teachers.push(teacher)
  
    }
  
    get teachers() {
  
      return this._teachers
  
    }
  
  }
  
  
  class University {
  
    constructor(name) {
  
      this._name = name
  
      this._departments = []
  
    }
  
    addDepartment(department) {
  
      this._departments.push(department)
  
    }
  
    get departments() {
  
      return this._departments
  
    }
  
  }
  const itebe = new University("itebeh")
  
  itebe.addDepartment("fmipa")
  
  console.log(itebe.departments)