const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(Math.PI);

// console.log(descriptor);

// const myNewObj = Object.create(null);

const coffee = {
  name: "Americano",
  price: 180,
  isAvailable: true,

  orderCoffe: function () {
    console.log(`Coffee's not ready`);
  },
};
console.log(Object.getOwnPropertyDescriptor(coffee, "name"));

Object.defineProperty(coffee, "name", {
  //   writable: false,
  enumerable: false,
});

// console.log(Object.getOwnPropertyDescriptor(coffee, "name"));

for (let [key, value] of Object.entries(coffee)) {
  if (typeof value !== "function") {
    console.log(`${key} :${value}`);
  }
}
