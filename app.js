"use strict";
const firstNumberDOM = document.getElementById("number1");
const secondNumberDOM = document.getElementById("number2");
const addButton = document.querySelector("button");
function add(num1, num2) {
    const numbers = checkNumberType(num1, num2);
    const strings = checkStringType(num1, num2);
    if (numbers) {
        return +num1 + +num2;
    }
    if (strings) {
        return num1 + " " + num2;
    }
    return +num1 + +num2;
}
function checkNumberType(num1, num2) {
    return typeof num1 === "number" && typeof num2 === "number" ? true : false;
}
function checkStringType(num1, num2) {
    return typeof num1 === "string" && typeof num2 === "string" ? true : false;
}
addButton.addEventListener("click", () => {
    const num1 = firstNumberDOM.value;
    const num2 = secondNumberDOM.value;
    const result = add(num1, num2);
    console.log(result);
});
