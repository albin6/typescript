// Accept a char input from the user and display it on the console.
var CharInput = /** @class */ (function () {
    function CharInput() {
        this.inputChar();
    }
    CharInput.prototype.inputChar = function () {
        var char = prompt("Enter a character: ");
        if (char) {
            console.log("You entered: ".concat(char));
        }
        else {
            console.log("You didn't enter any character.");
        }
    };
    return CharInput;
}());
new CharInput();
