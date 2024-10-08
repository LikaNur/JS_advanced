const applyUnaryPlus = (value) => +value;

const applyUnaryMinus = (value) => -value;

const incrementBefore = (value) => ++value;

const incrementAfter = (value) => value++;

const decrementBefore = (value) => --value;

const decrementAfter = (value) => value--;

let num = 5;

console.log("Unary + :", applyUnaryPlus("10"));
console.log("Unary - :", applyUnaryMinus(10));

console.log("Increment before:", incrementBefore(num));
console.log("Increment after:", incrementAfter(num));

num = 5;

console.log("Decrement before:", decrementBefore(num));
console.log("Decrement after:", decrementAfter(num));
