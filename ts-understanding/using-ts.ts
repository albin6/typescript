const sbtBtn = document.getElementById("btn");
const numberOne = document.getElementById("num1")! as HTMLInputElement;
const numberTwo = document.getElementById("num2")! as HTMLInputElement;

function addNumbers(num1: number, num2: number) {
  console.log(num1 + num2);
}

sbtBtn?.addEventListener("click", () =>
  addNumbers(+numberOne.value, +numberTwo.value)
);

// only link the compiled js file with the index.html
