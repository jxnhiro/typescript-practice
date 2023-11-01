const firstNumberDOM = document.getElementById("number1") as HTMLInputElement;
const secondNumberDOM = document.getElementById("number2") as HTMLInputElement;

const addButton = document.querySelector("button") as HTMLButtonElement;

const numberArray: number[] = [];
const stringArray: string[] = [];

function add(num1: number | string, num2: number | string): number | string {
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

function checkNumberType(num1: any, num2: any): boolean {
  return typeof num1 === "number" && typeof num2 === "number" ? true : false;
}

function checkStringType(num1: any, num2: any): boolean {
  return typeof num1 === "string" && typeof num2 === "string" ? true : false;
}

function fetchProperties(object: { num: number; date: Date }): string {
  return object.num + " " + object.date;
}

addButton.addEventListener("click", () => {
  const num1: string = firstNumberDOM.value;
  const num2: string = secondNumberDOM.value;

  const result: number | string = add(num1, num2);

  console.log(result);
  console.log(fetchProperties({ num: 1, date: new Date() }));
  console.log(numberArray, stringArray);
});
