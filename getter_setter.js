class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }

  get password() {
    return this._password.toLowerCase();
  }
  set password(value) {
    return (this._password = value);
  }
}

const beans = new User("shuvam@startup.ai", "112233abDRFGH");
console.log(beans.email);
console.log(beans.password);
