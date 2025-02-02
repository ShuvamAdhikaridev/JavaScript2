function SetUSername(username) {
  this.username = username;
  console.log("Called");
  //? Complex DB calls
}

function CreateUSer(username, email, password) {
  SetUSername.call(this, username);
  this.email = email;
  this.password = password;
}

const chai = new CreateUSer("Shuvam", "Shuvamfacebook.com", "123");

console.log(chai);
