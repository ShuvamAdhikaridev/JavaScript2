const User = {
  _email: "Shuvamlim234@gmail.com",
  _password: "abc",

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this._email = value;
  },
};

const coffee = Object.create(User);

console.log(coffee.email);
