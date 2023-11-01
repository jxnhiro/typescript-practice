"use strict";
const firstNumberDOM = document.getElementById("number1");
const secondNumberDOM = document.getElementById("number2");
const addButton = document.querySelector("button");
const numberArray = [];
const stringArray = [];
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
function fetchProperties(object) {
    return object.num + " " + object.date;
}
addButton.addEventListener("click", () => {
    const num1 = firstNumberDOM.value;
    const num2 = secondNumberDOM.value;
    const result = add(num1, num2);
    console.log(result);
    console.log(fetchProperties({ num: 1, date: new Date() }));
    console.log(numberArray, stringArray);
});
const promiseTest = new Promise((resolve, reject) => {
    resolve("Hello");
});
promiseTest.then((resolveData) => {
    console.log(resolveData);
});
