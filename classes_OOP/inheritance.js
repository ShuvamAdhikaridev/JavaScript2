class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`UserName is : ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`New Course was added by ${this.username}`);
  }
}

const coffee = new Teacher("Shuvam", "shuvamlim234@gmail.com", "123");

coffee.addCourse();

const bhatti = new User("Chiya");

// bhatti.addCourse();
bhatti.logMe();

// console.log(coffee === bhatti);
// console.log(coffee === Teacher);

// console.log(coffee instanceof Teacher);

// console.log(coffee instanceof User);

console.log(Teacher instanceof User);
