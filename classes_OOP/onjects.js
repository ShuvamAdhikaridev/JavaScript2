// function multiplyBy5(num) {
//   return num * 5;
// }

// multiplyBy5.power = 4;

// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);

// function createUSer(username, score) {
//   this.username = username;
//   this.score = score;
// }

// createUSer.prototype.increment = function () {
//   this.score++;
// };

// createUSer.prototype.printME = function () {
//   console.log(`Score is ${this.score}`);
// };

// const Shuvam = new createUSer("Shuvam", 21);
// const coffee = createUSer("Coffee", 23);

// Shuvam.printME();

const student = function (studentName, classroom) {
  this.studentName = studentName;
  this.classroom = classroom;
};

student.prototype.class = function () {
  console.log(`${this.studentName} is placed in class ${this.classroom}`);
};

const students = new student("Shuvam", 11);

students.class();

console.log(students);
