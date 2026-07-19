# Javascript Important Interview Notes

1. What is JavaScript?

- JavaScript is a high-level, interpreted programming language used to build interactive web applications.
- It runs in the browser and also on the server using Node.js.

Key Features
- Dynamic Typing
- Event Driven
- Single Threaded
- Prototype Based
- Supports Asynchronous Programming

2. What is Closure?

- A Closure is a function that remembers and can access variables from its outer function even after the outer function has finished executing.

Example

```js
function outer() {

    let count = 0;

    return function () {
        count++;
        console.log(count);
    };

}

const counter = outer();

counter();
counter();
counter();

// Output
// 1
// 2
// 3
```

Use Cases
- Data Privacy
- Counters
- Memoization

3. What is Hoisting?

- Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope before execution.

```js
console.log(a);

var a = 10;

// undefined
```

Key Point
- var is hoisted and initialized as undefined.
- let and const are hoisted but stay in the Temporal Dead Zone (TDZ) until declared.

4. What is Scope?

- Scope determines where a variable can be accessed.

Types
- Global Scope
- Function Scope
- Block Scope

```js
{
    let x = 10;
}

console.log(x);

// ReferenceError
```

5. Difference between var, let and const

| var            | let              | const            |
| -------------- | ---------------- | ---------------- |
| Function Scope | Block Scope      | Block Scope      |
| Can Redeclare  | Cannot Redeclare | Cannot Redeclare |
| Can Reassign   | Can Reassign     | Cannot Reassign  |
| Hoisted        | Hoisted (TDZ)    | Hoisted (TDZ)    |

Always prefer:

- const by default
- let if value changes
- Avoid var

6. Difference between == and ===

==

Loose Equality
- Compares values after type conversion.

```js
5 == "5"

// true
```

===

Strict Equality
- Compares both value and data type.

```js
5 === "5"

// false
```

7. What is Event Loop?

- JavaScript is single-threaded.
- The Event Loop handles asynchronous operations by moving completed callbacks from the Callback Queue to the Call Stack when it's empty.

8. What is Promise?

- A Promise represents the result of an asynchronous operation.

States
- Pending
- Fulfilled
- Rejected

```js
fetchData()
    .then(data => console.log(data))
    .catch(err => console.log(err));
```

9. What is Async/Await?

- async/await is a cleaner way to work with Promises.
- async makes a function return a Promise.
- await pauses execution until the Promise is resolved.

```js
async function getUsers() {

    const users = await fetchData();

    console.log(users);

}
```

Benefits
- Cleaner Code
- Better Readability
- Easier Error Handling

10. What is Prototype?

- Every JavaScript object has a prototype.
- Objects inherit properties and methods from their prototype.

Example

```js
const person = {
    greet() {
        console.log("Hello");
    }
};

const user = Object.create(person);

user.greet();
```

11. What is the this Keyword?

- this refers to the object that is calling the function.

```js
const user = {

    name: "Yogesh",

    greet() {
        console.log(this.name);
    }

};

user.greet();
```

12. What are Arrow Functions?

- Arrow functions provide a shorter syntax for writing functions.

```js
const add = (a, b) => a + b;
```

Difference from Normal Functions
- Shorter syntax
- Do not have their own this
- Cannot be used as constructors

13. What is Destructuring?

- Destructuring extracts values from arrays or objects into variables.

```js
const user = {

    name: "Yogesh",

    age: 26

};

const { name, age } = user;
```

Benefits
- Cleaner Code
- Less Repetition

14. What is the Spread Operator?

- The Spread Operator (...) expands arrays or objects.

```js
const arr1 = [1,2];

const arr2 = [...arr1,3];
```

15. Frequently Asked JavaScript Interview Questions

| null                    | undefined                          |
| ----------------------- | ---------------------------------- |
| Intentional empty value | Variable declared but not assigned |
| Assigned by developer   | Assigned by JavaScript             |

What is a Callback Function?

- A callback is a function passed as an argument to another function and executed later.

```js
function greet(callback) {
    console.log("Hello");
    callback();
}

greet(() => console.log("World"));
```

What is Callback Hell?

- Nested callbacks that make code difficult to read and maintain.

Solution
- Promises
- Async/Await

Difference between forEach() and map()

| forEach()                   | map()                   |
| --------------------------- | ----------------------- |
| Does not return a new array | Returns a new array     |
| Used for iteration          | Used for transformation |

Difference between map() and filter()

| map()                    | filter()                       |
| ------------------------ | ------------------------------ |
| Transforms every element | Returns only matching elements |

