// ? ES6

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPAssword() {
    return `${this.password}abc`;
  }
}

const hello = new User("Shuvam", "Shuvamlim234@gmail.com", 12311);

console.log(hello.encryptPAssword());
