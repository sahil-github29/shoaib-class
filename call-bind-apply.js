var teacher = {salary:20000}
var principle = {salary:30000}

/*obj.add = function(secondNum) {
  return this['firstNum'] =  this['firstNum'] + secondNum
}
*/
var tax1 = [10, 3, 14, 5]
function getSalary(tax){
  console.log(this.salary + tax[0]+ tax[1]+tax[2])
}

/*getSalary.call(teacher, tax) // function.call(obj, args)
getSalary.call(principle, 20) // function.call(obj, args)
*/

getSalary.call(teacher, tax1) // function.call(obj, array)
getSalary.call(principle, tax1) // function.call(obj, array)




//console.log(obj.getSalary());
