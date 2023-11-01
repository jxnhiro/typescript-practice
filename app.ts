const firstNumberDOM = document.getElementById("number1") as HTMLInputElement;
const secondNumberDOM = document.getElementById("number2") as HTMLInputElement;

const addButton = document.querySelector("button") as HTMLButtonElement;

function add(num1: number | string, num2: number | string): number | string {
  if (checkNumberType(num1, num2)) {
    return +num1 + +num2;
  }

  if (checkStringType(num1, num2)) {
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

addButton.addEventListener("click", () => {
  const num1: string = firstNumberDOM.value;
  const num2: string = secondNumberDOM.value;

  const result: any = add(num1, num2);
  console.log(result);
});
