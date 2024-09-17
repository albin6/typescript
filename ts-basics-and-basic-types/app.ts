function add(n1: number, n2: number) {
  return n1 + n2;
}

const num1 = 4; // what if we change it to string
// const num1 = "4"; // same number but in string this time
// still it does'nt showing any error but now we can see
// it showing some unexpected behaviour

// here the ts helps us
const num2 = 3.5;

console.log(add(num1, num2));

// here it will work zero error but what make ts different?
// for knowing that lets make some changes on it
