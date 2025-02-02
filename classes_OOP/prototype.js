// let myName = "shuvam     ";

// console.log(myName.truelength());

let myHero = ["Thor", "Spiderman", "hulk"];

let heroPower = {
  thor: "Hammer",
  spiderman: "sling",
  hulk: "Size",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.shuvam = function () {
  console.log(`Shuvam is present in all objects`);
};

// heroPower.shuvam();

// myHero.shuvam();

Array.prototype.helloShuvam = function () {
  console.log(`Shuvam says hello`);
};

// myHero.helloShuvam();
// // heroPower.helloShuvam();

// const user = {
//   name: "Shuvam",
//   age: 11,
// };

// const Teacher = {
//   makeVideo: true,
// };

// const teachingSupport = {
//   isAvailable: false,
// };

// const taSupport = {
//   makeAssignment: "JS assignment",
//   fullTime: true,
//   __proto__: teachingSupport,
// };

// console.log(taSupport);

// Teacher.__proto__ = user;

// console.log(Teacher);

// Object.setPrototypeOf(teachingSupport, Teacher);

let anotherUSerNAme = "Shuvam     ";

String.prototype.trueLength = function () {
  console.log(this);
  console.log(`${this.name}`);
  console.log(`True Length is : ${this.trim().length}`);
};

anotherUSerNAme.trueLength();

"Hello".trueLength();
"Coffe".trueLength();
