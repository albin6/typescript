// 1. any
// ------
// => The most flexible type that disables type-checking. It can be used when you don't know the type ahead of time.
// => Use Case: When working with dynamic data like JSON from an API.

let data: any = "hello";
data = 42; // No error
data = { key: "value" }; // No error

// 2. unknown
// ----------
// => Similar to any but more type-safe. You must narrow the type before using it.
// => Use Case: Useful for APIs or dynamic content where you first need to confirm the type.

let value: unknown = "hello";
if (typeof value === "string") {
  console.log(value.toUpperCase()); // Safe to use
}

// 3. never
// --------
// => Represents values that never occur (e.g., a function that throws or has infinite loops).
// => Use Case: Used in exhaustive checks in type guards or functions that never return.

function error(message: string): never {
  throw new Error(message);
}

// 4. void
// -------
// => Used for functions that do not return a value.
// => Use Case: Describes functions where the result is irrelevant or absent.

function logMessage(message: string): void {
  console.log(message);
}

// 5. null and undefined
// ---------------------
// => Special types for null and undefined values. Can be explicitly assigned when strictNullChecks is off.
// => Use Case: Represent absence of value.

let nothing: null = null;
let uninitialized: undefined = undefined;

// 6. object
// ---------
// => Represents non-primitive types (e.g., arrays, objects, functions).
// => Use Case: Broadly type any structured data.

let obj: object = { key: "value" };

// ====================================================================================================

// 7. unknown vs any
// -----------------
// unknown forces you to narrow down its type before using it, making it safer than any.

let input: unknown = "hello";
// input.toUpperCase(); // Error
if (typeof input === "string") {
  console.log(input.toUpperCase()); // Works
}

// 8. never vs void
// ----------------
// never means something that never happens, while void is for something that doesn't return anything.

function throwError(): never {
  throw new Error("Something went wrong!");
}

// 9. Readonly<T>
// --------------
// Makes all properties of a type immutable.
// Use Case: Prevent changes to objects.

type User = { name: string; age: number };
const user: Readonly<User> = { name: "Alice", age: 30 };
// user.age = 31; // Error

// 10. Partial<T>
// --------------
// Makes all properties of a type optional.
// Use Case: Use for partial updates.

type User2 = { name: string; age: number };
const updateUser: Partial<User2> = { age: 31 };

// 11. Required<T>
// ---------------
// Makes all properties of a type required.
// Use Case: Opposite of Partial.

type OptionalUser = { name?: string; age?: number };
const completeUser: Required<OptionalUser> = { name: "Bob", age: 25 };

// 12. Pick<T, Keys>
// -----------------
// Creates a new type with a subset of properties from another type.
// Use Case: Select specific properties.

type User1 = { name: string; age: number; email: string };
type UserPreview = Pick<User1, "name" | "email">;
