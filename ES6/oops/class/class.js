class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }


    var chaekIdentity = () => {


     if (this.name === 'rahul' ) {
       return " you ar good programmer";
        console.log('rahul you rock man');
     }
        else {
          return " you r not ";
           console.log('hello rahul');
         }
  }

}
var useClass = new Person('rahujglj',33);
module.exports = useClass
