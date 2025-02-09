function outer() {
  let username = "Shuvam";
  //   console.log(secret);

  function inner() {
    let secret = "my111";
    console.log(username);
  }
  function innerTwo() {
    console.log("innerTwo:", username);
    // console.log(secret);
  }
  inner();
  innerTwo();
}

outer();
