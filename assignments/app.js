// Accept a char input from the user and display it on the console.
// class CharInput {
//   constructor() {
//     this.inputChar();
//   }
//   inputChar() {
//     const char: string | null = prompt("Enter a character: ");
//     if (char) {
//       console.log(`You entered: ${char}`);
//     } else {
//       console.log("You didn't enter any character.");
//     }
//   }
// }
// new CharInput();
// Accept two inputs from the user and output their sum.
// class Sum {
//   constructor(private num1: number, private num2: number) {
//     this.printSum();
//   }
//   private printSum() {
//     console.log(
//       this.num1 + " + " + this.num2 + " = " + (this.num1 + this.num2)
//     );
//   }
// }
// new Sum(10, 20);
// Write a program to find the simple interest.
// Program should accept 3 inputs from the user and calculate simple interest for the given inputs.
// Formula: SI=(P*R*n)/100)
// class SimpleInterest {
//   constructor(
//     private P: number,
//     private N: number,
//     private R: number,
//     private SI: number = 0
//   ) {}
//   public calculate(): number {
//     this.SI = (this.P * this.N * this.R) / 100;
//     return this.SI;
//   }
// }
// const SI = new SimpleInterest(10000, 2, 6);
// console.log(SI.calculate());
// Write a program to check whether a student has passed or failed in a subject after he or she
// enters their mark (pass mark for a subject is 50 out of 100).
// Program should accept an input from the user and output a message as “Passed” or “Failed”
// class Result {
//   constructor(private mark: number) {
//     this.printResult();
//   }
//   private printResult() {
//     if (this.mark > 100 || this.mark < 0) {
//       throw new Error("Invalid mark.");
//     }
//     if (this.mark >= 50) {
//       console.log("Passed");
//     } else {
//       console.log("Failed");
//     }
//   }
// }
// new Result(50);
// new Result(45);
// new Result(110);
// Write a program to show the grade obtained by a student after he/she enters their total mark percentage.
// Program should accept an input from the user and display their grade as follows
// class StudentGrade {
//   constructor(private mark: number) {
//     this.printGrade();
//   }
//   private printGrade() {
//     if (this.mark >= 90) {
//       console.log("A");
//     } else if (this.mark <= 89 && this.mark >= 80) {
//       console.log("B");
//     } else if (this.mark <= 79 && this.mark >= 70) {
//       console.log("C");
//     } else if (this.mark <= 69 && this.mark >= 60) {
//       console.log("D");
//     } else if (this.mark >= 59 && this.mark >= 50) {
//       console.log("E");
//     } else {
//       console.log("Failed");
//     }
//   }
// }
// new StudentGrade(65);
// new StudentGrade(75);
// new StudentGrade(85);
// new StudentGrade(95);
// new StudentGrade(35);
//  Using the ‘switch case’ write a program to accept an input number from the user and output the day as follows. (print day names)
// class Days {
//   constructor(private day: number) {
//     this.printDayName();
//   }
//   private printDayName() {
//     switch (this.day.toString()) {
//       case "1":
//         console.log("Sunday");
//         break;
//       case "2":
//         console.log("Monday");
//         break;
//       case "3":
//         console.log("Tuesday");
//         break;
//       case "4":
//         console.log("Wednesday");
//         break;
//       case "5":
//         console.log("Thursday");
//         break;
//       case "6":
//         console.log("Friday");
//         break;
//       case "7":
//         console.log("Saturday");
//         break;
//       default:
//         console.log("Invalid day number");
//         break;
//     }
//   }
// }
// new Days(3);
// new Days(10);
// Write a program to print the multiplication table of given numbers.
// Accept an input from the user and display its multiplication table
// class MultiplicationTable {
//   private num: number;
//   constructor() {
//     this.num = this.getNum();
//     this.printTable();
//   }
//   private getNum(): number {
//     return Number(prompt("Enter a number :"));
//   }
//   private printTable() {
//     for (let i = 0; i < 10; i++) {
//       console.log(`${i + 1} * ${this.num} = ${(i + 1) * this.num}`);
//     }
//   }
// }
// new MultiplicationTable();
// Write a program to find the sum of all the odd numbers for a given limit
// class SumOfOdd {
//   private num: number;
//   constructor() {
//     this.num = this.getNum();
//     this.printSumOfOdd();
//   }
//   private getNum(): number {
//     return Number(prompt("Enter a number :"));
//   }
//   private printSumOfOdd() {
//     let sum = 0;
//     for (let i = 1; i <= this.num; i++) {
//       if (i % 2) {
//         sum += i;
//       }
//     }
//     console.log(sum);
//   }
// }
// new SumOfOdd();
//  Write a program to print the following pattern (hint: use nested loop)
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// function printPattern() {
//   for (let i = 0; i < 5; i++) {
//     let row = "";
//     for (let j = 0; j <= i; j++) {
//       row += `${j + 1} `;
//     }
//     console.log(row);
//     row = "";
//   }
// }
// printPattern();
// Write a program to interchange the values of two arrays.
// Program should accept an array from the user, swap the values of two arrays and display it on the console
// function swapArrays(arr1: number[], arr2: number[]) {
//   if (arr1.length !== arr2.length) {
//     console.error("Error: Arrays must have the same length.");
//     return;
//   }
//   console.log("Before swap Array1 :", arr1);
//   console.log("Before swap Array2 :", arr2);
//   for (let i = 0; i < arr1.length; i++) {
//     [arr1[i], arr2[i]] = [arr2[i], arr1[i]];
//   }
//   console.log("After swap Array1 :", arr1);
//   console.log("After swap Array2 :", arr2);
// }
// const num1 = [10, 20, 30, 40, 50];
// const num2 = [15, 25, 35, 45, 55];
// swapArrays(num1, num2);
// Write a program to find the number of even numbers in an array
// Program should accept an array and display the number of even numbers contained in that array
// function numberOfEven(arr: number[]) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (!(arr[i] % 2)) {
//       count++;
//     }
//   }
//   console.log(count);
// }
// function getArray() {
//   const n = Number(prompt("Enter the length of array :"));
//   const arr: number[] = [];
//   for (let i = 0; i < n; i++) {
//     arr.push(Number(prompt(`Enter ${i + 1}th element :`)));
//   }
//   numberOfEven(arr);
// }
// getArray();
// Write a program to sort an array in descending order
// function sort(nums: number[]) {
//   if (nums.length <= 1) {
//     return nums;
//   }
//   const p: number = nums[nums.length - 1];
//   const left: number[] = [];
//   const right: number[] = [];
//   for (let i = 0; i < nums.length - 1; i++) {
//     if (nums[i] < p) {
//       left.push(nums[i]);
//     } else {
//       right.push(nums[i]);
//     }
//   }
//   return [...sort(right), p, ...sort(left)];
// }
// const nums: number[] = [20, 10, 50, 30, 40];
// console.log("Before sorting :", nums);
// console.log("After sorting :", sort(nums));
// Write a program to identify whether a string is a palindrome or not
// A string is a palindrome if it reads the same backward or forward eg: MALAYALAM
// Program should accept a string and display whether the string is a palindrome or not
function palindromeOrNot(str) {
    if (str.length <= 1) {
        return true;
    }
    if (str[0] !== str[str.length - 1]) {
        return false;
    }
    return palindromeOrNot(str.slice(1, str.length - 1));
}
function getString() {
    var str = prompt("Enter a string :");
    var isPalindrome = palindromeOrNot(str);
    if (isPalindrome) {
        console.log("String is palindrome");
    }
    else {
        console.log("String is not a palindrome");
    }
}
getString();
