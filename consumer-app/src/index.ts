import { Apple, Orange, greet } from 'my-sdk';

const apple = new Apple();
const orange = new Orange();

console.log(apple.getInfo()); // Output: This is a Apple.
console.log(orange.getInfo()); // Output: This is an Orange.

console.log(greet('Developer')); // Output: Hello, Developer!
