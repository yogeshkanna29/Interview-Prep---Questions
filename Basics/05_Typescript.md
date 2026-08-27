# Typescript Important Interview Notes

1. What is TypeScript?

- Typescript is superset of Javascript developed by Microsoft.
- It adds static typing to Javascript, helping developers catch errors during development instead of at runtime.
- Typescript code is compiled into Javascript code before it runs.

Key Features
- Static Typing
- Better Code Completion
- Error Checking
- Interfaces
- Generics
- Easier Code Maintenance

2. Interface vs Type

- An interface defines the structure of an object. (or)
- Both can define object shapes. Interfaces are commonly used for object contracts and can be extended or declaration-merged, while type aliases are more flexible for unions, intersections and primitive aliases.

Example 

```ts
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "Yogesh",
  age: 26
};
```

Best For
- Object shapes
- Classes
- API responses

Type

- A type is used to define any kind of data.
- It can represent objects, unions, intersections, primitives, tuples, and more.

Example

```ts
type User = {
  name: string;
  age: number;
};
```

Example with Union

```ts
type Status = "Pending" | "Completed";
```

| Interface                       | Type                                   |
| ------------------------------- | -------------------------------------- |
| Mainly for objects              | Can represent any type                 |
| Can be extended easily          | Uses intersections (`&`)               |
| Preferred for object structures | Preferred for unions and complex types |

3. any vs unknown


Any
- any disables type checking.
- You can assign any values and call any method without Typescript checking it.

Example

```ts
let value: any = 10;

value = "Hello";

value.toUpperCase();
```

Unknown
- unknown can store any value, but you must check its type before using it.

Example

```ts
let value: unknown = "Hello";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

| any                 | unknown                |
| ------------------- | ---------------------- |
| No type checking    | Type checking required |
| Less safe           | More safe              |
| Avoid when possible | Preferred over `any`   |

4. What are Generics?

- Generics allow us to write reusable code while preserving type safety.
- Generics allows us to write resuable functions, classes, or interfaces that work with different data types while maintaining type safety.

Example

Without Generic

```ts
function print(value: string) {
  return value;
}
```

With Generic

```ts
function print<T>(value: T): T {
  return value;
}
```

Usage

```ts
print<string>("Hello");

print<number>(10);
```

Better Example

```js
interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

const response: ApiResponse<User> = {
  success: true,
  data: {
    id: 1,
    name: "Yogesh"
  }
};
```

Benefits
- Reusable
- Type Safe
- Less Duplicate Code

5. Utility Types

Utility types are built-in Typescript types that help transform existing types.

Partial
- Makes all properties optional.

```ts
interface User {
  name: string;
  age: number;
}

type UpdateUser = Partial<User>;
```

Required
- Makes all properties required.

```ts
type UserRequired = Required<User>;
```

Pick
- Selects only specific properties.

```ts
type UserName = Pick<User, "name">;
```

Omit
- Removes specific properties.

```ts
type UserWithoutAge = Omit<User, "age">;
```

Readonly
- Makes properties read-only.

```ts
type ReadOnlyUser = Readonly<User>;
```

Common Utility Types
- Partial
- Required
- Pick
- Omit
- Readonly

6. What is Enum?

- An Enum is a speacial Typescript feature used to define a set of named constant values.

Example

```ts
enum Role {
  Admin,
  User,
  Guest
}

const role = Role.Admin;
```

String Enum

```ts
enum Status {
  Pending = "PENDING",
  Success = "SUCCESS"
}
```

Benefits
- Better readability
- Prevents invalid values
- Easy to maintain

7. What is Type Narrowing?

- Type narrowing is the process of reducing a broader type or a more specific type.
- It helps Typescript understand the exact type of a variable.

Example

```ts
function print(value: string | number) {

  if (typeof value === "string") {
    console.log(value.toUpperCase());
  }

}
```

Ways to Narrow Types

typeof

```ts
if (typeof value === "number") {
}
```

instanceof

```ts
if (person instanceof Employee) {
}
```

in Operator

```ts
if ("salary" in employee) {
}
```

8. Optional Properties

- The ? means the property is optional.

```ts
interface User {
  name: string;
  age?: number;
}
```

9. Optional Chaining

- Avoids errors when accessing nested properties.

```ts
user?.address?.city
```

10. Nullish Coalescing

- Provides a default value only if the value is null or undefined.

```ts
const name = userName ?? "Guest";
```







