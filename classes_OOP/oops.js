const user = {
  username: "Shuvam",
  logInCount: 8,
  signedIN: true,

  getUserDetails: function () {
    // console.log("Hello");
    // console.log(`USername: ${this.username}`);
    console.log(this);
  },
};

// console.log(user.logInCount);
// console.log(user.getUserDetails());

// console.log(this);

// const promiseOne = new Promise();
// const date = new Date();

function User(username, loginCount, isLoggedIn) {
  (this.username = username),
    (this.loginCount = loginCount),
    (this.isLoggedIn = isLoggedIn);

  return this;
}

const userOne = new User("Shuvam", 3, true);
const userTwo = new User("HELLO", 0, false);

console.log(userOne);
console.log(userTwo);
