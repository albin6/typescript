// Accept a char input from the user and display it on the console.

class CharInput {
  constructor() {
    this.inputChar();
  }
  inputChar() {
    const char: string | null = prompt("Enter a character: ");
    if (char) {
      console.log(`You entered: ${char}`);
    } else {
      console.log("You didn't enter any character.");
    }
  }
}

new CharInput();
