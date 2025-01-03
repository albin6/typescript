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

// function palindromeOrNot(str: string) {
//   if (str.length <= 1) {
//     return true;
//   }

//   if (str[0] !== str[str.length - 1]) {
//     return false;
//   }

//   return palindromeOrNot(str.slice(1, str.length - 1));
// }

// function getString() {
//   const str: string = prompt("Enter a string :")!;

//   const isPalindrome = palindromeOrNot(str);

//   if (isPalindrome) {
//     console.log("String is palindrome");
//   } else {
//     console.log("String is not a palindrome");
//   }
// }

// getString();

// Write a program to add to two dimensional arrays
// Program should accept two 2D arrays and display its sum

// function getArrays() {
//   const nums1: number[][] = [];
//   const nums2: number[][] = [];
//   const size = Number(prompt("Enter matrix size :"));
//   for (let i = 0; i < size; i++) {
//     nums1[i] = [];
//     for (let j = 0; j < size; j++) {
//       nums1[i][j] = Number(
//         prompt(`Enter ${i + 1} ${j + 1} th element to array 1 :`)
//       );
//     }
//   }

//   for (let i = 0; i < size; i++) {
//     nums2[i] = [];
//     for (let j = 0; j < size; j++) {
//       nums2[i][j] = Number(
//         prompt(`Enter ${i + 1} ${j + 1} th element to array 2 :`)
//       );
//     }
//   }
//   findSum(nums1, nums2, size);
// }

// function findSum(nums1: number[][], nums2: number[][], size: number) {
//   const sum: number[][] = [];
//   for (let i = 0; i < size; i++) {
//     sum[i] = [];
//     for (let j = 0; j < size; j++) {
//       sum[i][j] = nums1[i][j] + nums2[i][j];
//     }
//   }
//   for (let i = 0; i < size; i++) {
//     let row = "";
//     for (let j = 0; j < size; j++) {
//       row += sum[i][j] + " ";
//     }
//     console.log(row);
//   }
// }

// getArrays();

// Write a program to accept an array and display it on the console using functions
// Program should contain 3 functions including main() function

// function main() {
//   const num: number[] = [];
//   getArray(num);
//   displayArray(num);
// }

// function getArray(num: number[]) {
//   const size = Number(prompt("Enter size of array :"));
//   for (let i = 0; i < size; i++) {
//     num[i] = Number(prompt("Enter element :"));
//   }
// }

// function displayArray(num: number[]) {
//   let str = "";
//   for (let i = 0; i < num.length; i++) {
//     str += num[i] + " ";
//   }
//   console.log(str);
// }

// main();

// Write a program to check whether a given number is prime or not
// Program should accept an input from the user and display whether the number is prime or not

// function isPalindrome(num: number): boolean {
//   return num.toString() === num.toString().split("").reverse().join("");
// }

// console.log(isPalindrome(10));
// console.log(isPalindrome(101));

// Write a menu driven program to do the basic mathematical operations such as addition, subtraction, multiplication and division (hint: use if else ladder or switch)
// Program should have 4 functions named addition(), subtraction(), multiplication() and division()
// Should create a class object and call the appropriate function as user prefers in the main function

// class MathematicalOpr {
//   private num1: number;
//   private num2: number;
//   private operation: string;
//   constructor() {
//     this.main();
//   }
//   main() {
//     this.num1 = Number(prompt("Enter number 1"));
//     this.num2 = Number(prompt("Enter number 2"));
//     this.operation = prompt(
//       "1) Addition \n 2) Subtraction \n 3) Multiplication \n 4) Division"
//     )!;

//     switch (this.operation) {
//       case "1":
//         this.add(this.num1, this.num2);
//         break;
//       case "2":
//         this.subtract(this.num1, this.num2);
//         break;
//       case "3":
//         this.multiply(this.num1, this.num2);
//         break;
//       case "4":
//         this.divide(this.num1, this.num2);
//         break;
//       default:
//         console.log("Invalid operation");
//         break;
//     }
//   }
//   add(num1: number, num2: number) {
//     console.log(num1, " + ", num2, " = ", num1 + num2);
//   }
//   subtract(num1: number, num2: number) {
//     console.log(num1, " - ", num2, " = ", num1 - num2);
//   }
//   divide(num1: number, num2: number) {
//     console.log(num1, " / ", num2, " = ", num1 / num2);
//   }
//   multiply(num1: number, num2: number) {
//     console.log(num1, " x ", num2, " = ", num1 * num2);
//   }
// }

// new MathematicalOpr();

// Grades are computed using a weighted average. Suppose that the written test counts 70%,  lab exams 20% and assignments 10%.
// If Arun has a score of
// Written test = 81
// Lab exams = 68
// Assignments = 92
// Arun’s overall grade = (81x70)/100 + (68x20)/100 + (92x10)/100 = 79.5

// function computeWeighterAvg() {
//   const writtenTest = Number(prompt("Enter score in written test"));
//   const lab = Number(prompt("Enter score in lab exams"));
//   const assignments = Number(prompt("Enter score in assignments"));

//   console.log(
//     "Overall grade =>",
//     (writtenTest * 70) / 100 + (lab * 20) / 100 + (assignments * 10) / 100
//   );
// }

// computeWeighterAvg();

// Write a program to print the following pattern using for loop
// 1
// 2	3
// 4	5	6
// 7	8	9	10

// function printPattern() {
//   let count = 1;
//   for (let i = 0; i < 4; i++) {
//     let str = "";
//     for (let j = 0; j <= i; j++) {
//       str += count + " ";
//       count++;
//     }
//     console.log(str);
//   }
// }

// printPattern();

// Write a program to multiply the adjacent values of an array and store it in an another array
// Program should accept an array
// Multiply the adjacent values
// Store the result into another array

// function test(nums: number[]) {
//   const result: number[] = [];
//   for (let i = 0; i < nums.length - 1; i++) {
//     result.push(nums[i] * nums[i + 1]);
//   }
//   console.log(JSON.stringify(result));
// }

// test([1, 2, 3, 4, 5]);

// Write a program to add the values of two 2D arrays
// Program should contains 3 functions including the main function
// main()
// Call function getArray()
// Call function addArray()
// Call function displayArray()

// function main() {
//   const arr1: number[][] = [];
//   const arr2: number[][] = [];
//   getArray(arr1, arr2);
//   const sum = addArray(arr1, arr2);
//   displayArray(sum);
// }

// function getArray(nums1: number[][], nums2: number[][]) {
//   const size = Number(prompt("Enter matrix size :"));
//   for (let i = 0; i < size; i++) {
//     nums1[i] = [];
//     for (let j = 0; j < size; j++) {
//       nums1[i][j] = Number(
//         prompt(`Enter ${i + 1} ${j + 1} th element to array 1 :`)
//       );
//     }
//   }

//   for (let i = 0; i < size; i++) {
//     nums2[i] = [];
//     for (let j = 0; j < size; j++) {
//       nums2[i][j] = Number(
//         prompt(`Enter ${i + 1} ${j + 1} th element to array 2 :`)
//       );
//     }
//   }
// }

// function addArray(nums1: number[][], nums2: number[][]): number[][] {
//   const sum: number[][] = [];
//   for (let i = 0; i < nums1.length; i++) {
//     sum[i] = [];
//     for (let j = 0; j < nums1.length; j++) {
//       sum[i][j] = nums1[i][j] + nums2[i][j];
//     }
//   }
//   return sum;
// }

// function displayArray(sum: number[][]) {
//   for (let i = 0; i < sum.length; i++) {
//     let row = "";
//     for (let j = 0; j < sum.length; j++) {
//       row += sum[i][j] + " ";
//     }
//     console.log(row);
//   }
// }

// main();

// Write an object oriented program to store and display the values of a 2D array
// Program should contains 3 functions including the main function
// main()
// Declare an array
// Call function getArray()
// Call function displayArray()

// class MultiDimentionalArray {
//   constructor() {
//     this.main();
//   }
//   main() {
//     const arr: number[] = [];
//     this.getArray(arr);
//     this.displayArray(arr);
//   }

//   getArray(arr: number[]): void {
//     const size = Number(prompt("Enter matrix size :"));

//     for (let j = 0; j < size; j++) {
//       arr[j] = Number(prompt(`Enter ${j + 1} th element to array :`));
//     }
//   }

//   displayArray(arr: number[]): void {
//     let row = "";
//     for (let j = 0; j < arr.length; j++) {
//       row += arr[j] + " ";
//     }
//     console.log(row);
//   }
// }

// new MultiDimentionalArray();

// Write a menu driven program to calculate the area of a given object.
// Program should contain two classes
// Class 1: MyClass
// Class 2: Area
// Class MyClass should inherit class Area and should contain the following functions
// main()
// circle()
// square()
// rectangle()
// triangle()
// Class Area should contain the following functions to calculate the area of different objects
// circle()
// square()
// rectangle()
// triangle()

// class Area {
//   circle() {
//     const radius = Number(prompt("Enter the radius :"));
//     console.log("Area of circle :", 3.14 * radius ** 2);
//   }
//   square() {
//     const side = Number(prompt("Enter side of square"));
//     console.log("Area of square is :", side * side);
//   }
//   rectangle() {
//     const length = Number(prompt("Enter length of rectangle"));
//     const bradth = Number(prompt("Enter bradth of rectangle"));

//     console.log("Area of rectangle :", length * bradth);
//   }
//   triangle() {
//     const base = Number(prompt("Enter base of triangle"));
//     const height = Number(prompt("Enter height of triangle"));

//     console.log("Area of triangle is : ", (base * height) / 2);
//   }
// }

// class MyClass extends Area {
//   constructor() {
//     super();
//     this.main();
//   }
//   main() {
//     const ch: number = Number(
//       prompt(`
//         Enter Your Choice;
//         1) Circle
//         2) Square
//         3) Rectangle
//         4) Triangle
//         `)
//     );
//     switch (ch) {
//       case 1:
//         this.circle();
//         break;
//       case 2:
//         this.square();
//         break;
//       case 3:
//         this.rectangle();
//         break;
//       case 4:
//         this.triangle();
//         break;
//       default:
//         break;
//     }
//   }
// }

// new MyClass();

// interface Book {
//   title: string;
//   author: string;
//   readingStatus: boolean;
// }

// const library: Book[] = [
//   {
//     title: "The Road Ahead",
//     author: "Bill Gates",
//     readingStatus: true,
//   },
//   {
//     title: "Walter Isaacson",
//     author: "Steve Jobs",
//     readingStatus: true,
//   },
//   {
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     author: "Suzanne Collins",
//     readingStatus: false,
//   },
// ];

// function displayBookStatus(library: Book[]): void {
//   library.forEach((book) => {
//     if (book.readingStatus) {
//       console.log(`Already read '${book.title}' by ${book.author}.`);
//     } else {
//       console.log(`You still need to read '${book.title}' by ${book.author}.`);
//     }
//   });
// }

// displayBookStatus(library);

// function reverseString(my_string: any): void {
//   try {
//     const reversedString = my_string.split("").reverse().join("");
//     console.log(`Reversed string is : ${reversedString}`);
//   } catch (err) {
//     console.log(`Error : ${err.message}`);
//   } finally {
//     console.log(`Type of my_string is : ${typeof my_string}`);
//   }
// }

// reverseString("1234");
// reverseString(Number(1234));

// function validateHeight(my_height: any): void {
//   try {
//     if (isNaN(my_height)) {
//       throw new Error("notANumberError");
//     }

//     const height = Number(my_height);

//     if (height > 76) {
//       throw new Error("hugeHeightError");
//     } else if (height < 1) {
//       throw new Error("tinyHeightError");
//     }

//     console.log(height);
//   } catch (err: any) {
//     console.log(err.message);
//   }
// }

// validateHeight("seven");
// validateHeight(77);
// validateHeight(0);
// validateHeight(8);

// class Car {
//   name: string;
//   mileage: number;
//   max_speed: number;

//   constructor(name: string, mileage: number, max_speed: number) {
//     this.name = name;
//     this.mileage = mileage;
//     this.max_speed = max_speed;
//   }
// }

// const car1 = new Car("Tesla Model S", 250, 200);
// const car2 = new Car("Ford Mustang", 150, 180);

// console.log(
//   `Car 1: ${car1.name}, Mileage: ${car1.mileage}, Max Speed: ${car1.max_speed}`
// );
// console.log(
//   `Car 2: ${car2.name}, Mileage: ${car2.mileage}, Max Speed: ${car2.max_speed}`
// );

// function myFilter(
//   myArray: number[],
//   callback: (num: number) => boolean
// ): number {
//   let sum = myArray.reduce((acc, num) => acc + num, 0);
//   callback(sum);
//   return sum;
// }

// function isEvenOrOdd(num: number): boolean {
//   if (num % 2 === 0) {
//     console.log("The sum is even.");
//     return true;
//   } else {
//     console.log("The sum is odd.");
//     return false;
//   }
// }

// const input = "12345";
// const myArray = input.split("").map(Number);
// const result = myFilter(myArray, isEvenOrOdd);

// console.log(result);

// function calculateIncomeTax(annualIncome: number): number {
//   let tax = 0;

//   if (annualIncome <= 250000) {
//     tax = 0;
//   } else if (annualIncome > 250000 && annualIncome <= 500000) {
//     tax = (annualIncome - 250000) * 0.05;
//   } else if (annualIncome > 500000 && annualIncome <= 1000000) {
//     tax = 250000 * 0.05 + (annualIncome - 500000) * 0.2;
//   } else if (annualIncome > 1000000) {
//     tax = 250000 * 0.05 + 500000 * 0.2 + (annualIncome - 1000000) * 0.3;
//   }

//   return tax;
// }

// const annualIncomeInput = 495000;
// const taxAmount = calculateIncomeTax(annualIncomeInput);

// console.log(`Income tax amount = ${taxAmount.toFixed(2)}`);
