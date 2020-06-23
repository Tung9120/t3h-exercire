class Person {
  constructor(name) {
		this.name = name;
		// this.eat = this.eat.bind(this)
		// this.go = this.go.bind(this)
  }
  go = () => {
    console.log(this.name + " is going");
  };
  eat = function () {
    console.log(this.name + " is eating");
  }.bind(this);
  // eat(){
  // 	console.log(this.name + ' is eating');
  // }
}

var quy = new Person("Quy");
var dat = new Person("Dat");
console.log(quy, dat);
quy.go();
dat.go();
quy.eat();
dat.eat();

var go = quy.go;
var eat = quy.eat;
// var eat = quy.eat.bind(quy);
go();
eat();

// class Teacher {
//   constructor(name) {
//     this.name = name;
//     this.age = 18;
//   }
// }

// class Doctor {
//   constructor(name) {
//     this.name = name;
//     this.degree = "dentist";
//   }
// }

class Teacher extends Person {
  constructor(name, age) {
    // this.name = name;
    super(name);
    this.age = age;
  }
}

class Doctor extends Person {
  constructor(name, degree) {
    // this.name = name;
    super(name);
    this.degree = degree;
  }
}

var teacher = new Teacher("Huan", 30);
var doctor = new Doctor("Bluetooth", "dentist");

console.log(teacher, doctor);
