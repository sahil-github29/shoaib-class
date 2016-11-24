class Person{
  constructor() {

  }
  doWork(){
    return "complete";
  }
  getName(){
    return "scott";
  }
}
class Employee extends Person {
}

var abstClass = new Employee()

module.exports = abstClass
