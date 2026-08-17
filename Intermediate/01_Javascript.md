# JavaScript Foundation

<details>
    <summary><strong>Execution Context</strong></summary>

<details>
        <summary><strong>Q1. What is an Execution Context?</strong></summary>
        
An execution context is the environment in which JavaScript code is evaluated and executed. It contains information required to execute that code, such as variables, functions, scope information and the value of this.

There are mainly:

* Global Execution Context
* Function Execution Context
* Eval Execution Context — rarely relevant in normal development

When JavaScript starts executing a program, the Global Execution Context is created.
When a function is called, a new Function Execution Context is created.
</details>

---

<details>
    <summary><strong>Q2. What happens when a JavaScript program starts executing?</strong></summary>
    
Creation phase → Execution phase

During creation, JavaScript prepares things such as:

* Variables
* Function declarations
* Scope information
* this

Then the actual code executes.

Example:

```JavaScript
console.log(name);

var name = "Yogesh";
```
</details>
    
</details>

---

<details>
    <summary><strong>Call Stack</strong></summary>
    
<details>
    <summary><strong>Q3. What is the Call Stack?</strong></summary>
    
The Call Stack is a LIFO data structure used by JavaScript to keep track of function execution.

Example:
```JavaScript
function first() {
    second();
}

function second() {
    console.log("Hello");
}

first();
```

Conceptually:

          ┌─────────────┐
          │   second()  │
          ├─────────────┤
          │   first()   │
          ├─────────────┤
          │   global    │
          └─────────────┘

second() finishes → removed.
Then first() finishes → removed.
</details>

---

<details>
    <summary><strong>Q4. What happens if the Call Stack becomes too large?</strong></summary>
    
Example:
```JavaScript
function test() {
    test();
}

test();
```

The function keeps calling itself.

Eventually:
```
RangeError: Maximum call stack size exceeded
```
This is called **stack overflow**.
</details>
</details>

---

<details>
    <summary><strong>Scope</strong></summary>
    
<details>
    <summary><strong>Q5. What is scope?</strong></summary>

Scope determines where a variable can be accessed.

Important types:

* Global scope
* Function scope
* Block scope
* Lexical scope

Example:
```JavaScript
let a = 10;

function test() {
    let b = 20;

    console.log(a);
    console.log(b);
}
```

test() can access a because a is in an outer scope.
</details>
</details>

---

<details>
    <summary><strong>var, let, const</strong></summary>
    
<details>
    <summary><strong>Q6. Difference between var, let, and const?</strong></summary>
    
|                 | var | let  | const |
| --------------- | --- | ---- | ----- |
| Function scoped | ✅   | ❌    | ❌     |
| Block scoped    | ❌   | ✅    | ✅     |
| Redeclaration   | ✅   | ❌    | ❌     |
| Reassignment    | ✅   | ✅    | ❌     |
| Hoisted         | Yes | Yes* | Yes*  |

let and const are hoisted but remain in the Temporal Dead Zone (TDZ) until their declaration is reached.

Example:
```JavaScript
console.log(a);

let a = 10;
```

This gives:
```
ReferenceError
```
Not undefined.
</details>
</details>

---

<details>
    <summary><strong>Lexical Scope</strong></summary>
    
<details>
    <summary><strong>Q7. What is lexical scope?</strong></summary>
    
Lexical scope means that a function's accessible variables are determined by where the function is written, not where it is called.

Example:

```JavaScript
const name = "Yogesh";

function outer() {
    const message = "Hello";

    function inner() {
        console.log(message);
    }

    inner();
}

outer();
```
inner() can access message because it was defined inside outer().
</details>
    
</details>

---

<details>
    <summary><strong>Hoisting</strong></summary>
    
<details>
    <summary><strong>Q8. What is hoisting?</strong></summary>
    
Hoisting is JavaScript's behavior where declarations are processed before the code execution phase. However, the behavior differs between var, let, const, function declarations and classes.

Example:

```JavaScript
console.log(a);

var a = 10;
```
undefined

```JavaScript
console.log(a);

let a = 10;
```
ReferenceError
</details>

---

<details>
    <summary><strong>Q9. Are let and const hoisted?</strong></summary>
    
Yes.

But they're not accessible before initialization because they're inside the Temporal Dead Zone.
</details>
</details>

---

<details>
    <summary><strong>Function Hoisting</strong></summary>
    
<details>
    <summary><strong>Q10. What is the output?</strong></summary>
    
```JavaScript
sayHello();

function sayHello() {
    console.log("Hello");
}
```

Output:
```
Hello
```
Function declarations are available before their position in the source code.

But:
```JavaScript
sayHello();

const sayHello = () => {
    console.log("Hello");
};
```
Because the variable is in the TDZ.
</details>
</details>


