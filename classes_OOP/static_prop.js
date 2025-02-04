class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username} `);
  }

  static crreateId() {
    return `123`;
  }
}

const Shuvam = new User("Shuvam");

// console.log(Shuvam.crreateId());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iPhone = new Teacher("iphone", "ihpneemail@.com");

iPhone.logMe();

console.log(iPhone.crreateId());
