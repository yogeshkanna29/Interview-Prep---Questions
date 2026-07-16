# React JS Important Interview Notes

1. What is React?

- React is an open-source JavaScript library used to build user interfaces (UI), especially Single Page Applications (SPAs).
- React builds the UI using reusable components.

Key Features
- Component-Based
- Virtual DOM
- One-Way Data Binding
- Reusable Components
- Fast Rendering

2. What are Hooks?
- Hooks are bulit-in react functions that let functional components use state and lifecycle features.
- Before Hooks, these features were available only in class components.

Common Hooks
- useState
- useEffect
- useMemo
- useCallback
- useRef
- useContext

3. What is useState?

- useState is used to create and manage state inside a functional component.

Example

```js
const [count, setCount] = useState(0);
```

Update State

```js
setCount(count + 1);
```

Use Cases
- Counter
- Forms
- Toggle Button
- Modal Open/Close

4. What is useEffect?

- useEffect is used to performs side effects after the component renders.

Examples of side effects:
* API calls
* Timers
* Event Listners
* Updating Document Title

Example

```js
useEffect(() => {
    console.log("Component Loaded");
}, []);
```

Dependency Array

```js
[]
```

5. What is useMemo?

- useMemo stores the result of an expensive calculation.
- It avoids recalculating the value unless its dependencies change.

Example

```js
const total = useMemo(() => {
    return calculateTotal(items);
}, [items]);
```

Benefits
- Better Performance
- Avoids unnecessary calculations

6. What is useCallback?

- useCallback stores a function.
- Instead of creating a new function on every render, React reuses the existing one if dependencies don't change.

Benefits

- Prevents unnecessary re-renders
- Improves performance

Difference between useMemo and useCallback

| useMemo                         | useCallback             |
| ------------------------------- | ----------------------- |
| Caches a value                  | Caches a function       |
| Returns value                   | Returns function        |
| Used for expensive calculations | Used for event handlers |

7. What is React Query?

- React Query is a library used to fetch, cache, and synchronize server data.
- Instead of manually managing loading and error states, React Query handles them automatically.

Example

```js
const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers
});
```

Features
- API Fetching
- Caching
- Background Refetching
- Automatic Retries

8. What is Context API?

- Context API is used to share data between components without passing props through every level (prop drilling).

Example

```js
<UserContext.Provider value={user}>
```

Use Cases
- Theme
- Logged-in User
- Language
- Authentication

9. Redux Basics

- Redux is a state management library used to manage application-wide state.

Main concepts
- Store
- Action
- Reducers
- Dispatch

Flow

```js
Component

↓

Dispatch Action

↓

Reducer

↓

Store Updated

↓

UI Updated
```

Use Cases
- Shopping Cart
- User Login
- Theme
- Large Applications

10. What is Virtual DOM?

- Virtual DOM is lightweight copy of the DOM.
- When data changes, React updates the virtual DOM first.
- It compares it with the previous version and updates only the changed parts in the Real DOM.

Benefits
- Faster Rendering
- Better Performance
- Fewer DOM Updates

11. What is Reconciliation?

- Reconcilation is the process React uses to compare old Virtual DOM with the new Virtual DOm.
- React identifies what changed and updates only those elements in the Real DOM.
- This process is called Diffing.

12. Controlled vs Uncontrolled Components

Controlled Component
- React controls the input value using state.

Example 

```js
const [name, setName] = useState("");

<input
    value={name}
    onChange={(e) => setName(e.target.value)}
/>
```

Advantages
- Easy Validation
- Predictable
- Better Form Handling

Uncontrolled Component
- The DOM controls the input.
- React accesses the value using a Ref.

Example

```js
const inputRef = useRef();

<input ref={inputRef} />
```

Advantages
- Less Code
- Good for simple forms

| Controlled             | Uncontrolled   |
| ---------------------- | -------------- |
| Managed by React State | Managed by DOM |
| Uses useState          | Uses useRef    |
| Easier Validation      | Simpler        |

13. Component Lifecycle

- React components go through three stages.

Mounting
- Component is created.

Examples

```js
Constructor (Class)
useEffect(() => {}, [])
```

Updating
- Component re-renders because

* State changes
* Props change

Example

```js
useEffect(() => {

}, [count]);
```

Unmounting
- Component is removed.

Cleanup

```js
useEffect(() => {

    return () => {
        console.log("Cleanup");
    };

}, []);
```

Used for
- Removing Event Listeners
- Clearing Timers
- Closing WebSocket Connections

14. Props vs State

| Props              | State                    |
| ------------------ | ------------------------ |
| Passed from Parent | Managed inside Component |
| Read-only          | Can change               |
| External Data      | Internal Data            |

15. React Rendering Flow

```js
User Action

↓

State Changes

↓

Component Re-renders

↓

Virtual DOM Updated

↓

Reconciliation

↓

Real DOM Updated

↓

Browser Displays Changes
```


