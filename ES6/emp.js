var Person = require('./person')

class Employee extends Person {
    constructor(name){
        super()
        this.vehicle = name
    }
    static gears() {
        return "I have 4 gears"
    }
    work() {
        return "I am doing bank work"
    }
    getSalary(){
        var tax = 230
        var tds = 500
        var salary = 20000

        var calculatedSalary = salary - (tax + tds)
        return calculatedSalary;
    }
}
var emp = new Employee("Employee")

var gears = Employee.gears()

var classObj = {
    emp : emp,
    gears : gears
}

module.exports = classObj
