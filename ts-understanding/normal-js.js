const btn = document.getElementById("btn");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

function findSum(num1, num2) {
  console.log(+num1 + +num2);
}

btn.addEventListener("click", () => findSum(num1.value, num2.value));

// here we expect the sum of the two given numbers but it result with a concatination of two strings
// the reason is value taken directly from an input box should be a string
