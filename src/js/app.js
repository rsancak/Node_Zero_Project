const $ = require('jquery');
import myLib from './modules';
const lib = new myLib();
lib.sayHello();
lib.sayByBy();

$("#testBtn").on('click', () => {
    alert("JQUERY OK!");
});

const testESLint = "Test ESLint";
console.log(testESLint);
