var sbtBtn = document.getElementById("btn");
var numberOne = document.getElementById("num1");
var numberTwo = document.getElementById("num2");
function addNumbers(num1, num2) {
    console.log(num1 + num2);
}
sbtBtn === null || sbtBtn === void 0 ? void 0 : sbtBtn.addEventListener("click", function () {
    return addNumbers(+numberOne.value, +numberTwo.value);
});
