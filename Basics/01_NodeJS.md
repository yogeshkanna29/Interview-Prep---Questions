# Node.js Important Interview Notes

1. What is Event Loop?

- The event loop is a mechanism that processes asynchronous tasks in single thread by continuously
  checking for and executing callback functions.

```js
console.log("Start");

setTimeout(() => {
  console.log("Hello");
}, 1000);

console.log("End");

// Output

// Start
// End
// nextTick
```

2. What is libuv?

- Libuv is a C library used internally by Node.js.

- It provides asynchronous features like file operations, networking, timers, and thread pool support.

- Without libuv, Node.js cannot efficiently handle the asynchronous operations.

Key Features : Event Loop, Thread Pool, File System Operations, Networking, DNS Lookup.

3. What is process.nextTick()?

- process.nextTick() executes a callback immediately after the current operation finishes, 
before the event loop continues.

- It has the highest priority amoung asynchronous callbacks.

```js
console.log('start');

process.nextTick(() => {
    console.log('nextTick');
});

console.log('End');
```

4. What is setImmediate()?

- setImmediate() schedules a callback to the next iteration of the Event loop.

- It executes after I/O operations.

```js
setImmediate(() => {
    console.log("Immediate");
})
```

5. What is setTimeout()?

setTimeout() executes a function after a specified delay.

```js
setTimeout(() => {
    console.log("Hello");
}, 1000);
```

6. Difference between process.nextTick(), setImmediate(), and setTimeout() ?

| Method | Executes | 
|--------|----------|
| process.tick() | Before Event loop executes |
| setImmediate() | Next Event loop iteration |
| setTimeout() | After specified delay |

Execution Order

process.nextTick()

↓

setImmediate()

↓

setTimeout()

7. What are Streams?

- Streams are used to read or write data continuously without loading the entire file into memory.

Useful for large files.

Types

Readable Stream
Writable Stream
Duplex Stream
Transform Stream

Example

Reading a 5GB file.

Instead of loading everything,

Node.js reads small chunks.

Benefits

Faster
Less memory usage
Better performance

8. What are Buffers?

- Buffers are temporary storage space used to store binary data.
- Allowing Node.js to handle raw data directly.

Images
Videos
PDFs
Audio files

```js
const buffer = Buffer.from("Hello");

console.log(buffer);
```

9. What is Cluster?

- Cluster allows Node.js to create multiple processes.
- Each processes runs on a different CPU core.
- This improves application performance.

Benifits

- Better CPU utilization.
- Handles more requests.
- High availability.

10. What are Worker Threads? 

- Worker Threads allow javascript code to run in parallel.
Useful for CPU-intensive tasks.

Examples
- Image processing
- Video conversion
- Data encryption

11. What is Child Process?

- Child processes creates another processes from the main Node.js application.
- Useful for running external commands or scripts.

Common Methods
exec()
spawn()
fork()

- fork(): Creates a exact duplicate (child) of the current process. It copies the memory space, file descriptors, and environment variables. The child gets a new Process ID (PID).
---
- exec(): Replaces the current process's memory space and program with a brand new program. It does not create a new process; instead, the old program stops and the new program takes over its PID.
---
- spawn(): Combines creating a process and running a program in one single step (common in modern OS design or environments like Node.js) without needing a separate duplicate phase.
---
Example
Running a Python script from Node.js.

12. What is Middleware?

- Middleware is a function that runs between receiving the request and sending the response.
It can 
- Validate data
- Authenticate users
- Log requests
- Handle errors

```js
app.use((req,res,next)=>{
    console.log("Request received");
    next();
});
```

13. What is Error Handling?

- Error handling is the process of catching and managing errors so the application doesn't crash.

Synchronous
```js
try{
}
catch(err){
}
```
Asynchronous
```js
try{
   await something();
}
catch(err){
}
```
Express
```js
app.use((err,req,res,next)=>{
    res.status(500).json({
        message:err.message
    });
});
```

14. What is Promise?

- A Promise represents the result of an asynchronous operation.
- Promises in Node.js are objects that handle asynchronous operations, providing a cleaner
alternative to callback functions.

It has three states:
- Pending
- Fulfilled
- Rejected

```js
fetchData()
.then(data=>{})
.catch(err=>{})
```

15. What is Async/Await?

- Async/Await is a cleaner way to work with Promises.

- async makes a function return a Promise.
- await waits until the Promise is completed.

```js
async function getData(){
const data = await fetchData();
}
```

Benefits
- Easy to read
- Avoids callback nesting
- Better error handling

16. What is Callback Hell?

- Callback Hell happens when multiple callbacks are nested inside each other.
- It makes code difficult to read and maintain.

```js
login(()=>{
    getUser(()=>{
        getOrders(()=>{
            payment(()=>{
            });
        });
    });
});
```

Solution
- Promises
- Async/Await

17. What is EventEmitter?

- EventEmitter is a Node.js class used to create and handle custom events.
- One part of the application emits an event, and another part listens for it.

```js
const EventEmitter = require('events');
const event = new EventEmitter();
event.on("login",()=>{
    console.log("User Logged In");
});
event.emit("login");
```

18. What are REST API Principles?

- REST stands for Representational State Transfer.
- REST APIs follow standard HTTP methods to communicate between client and server.

HTTP Methods
- GET → Retrieve data
- POST → Create data
- PUT → Update entire resource
- PATCH → Update part of a resource
- DELETE → Delete data

REST Principles
- Stateless (server does not store client session)
- Client-Server architecture
- Uniform URLs (e.g., /users/1)
- Use proper HTTP methods
- Return standard HTTP status codes (200, 201, 400, 401, 404, 500)
- Resources are identified by URLs

```js
GET    /users
POST   /users
GET    /users/1
PUT    /users/1
DELETE /users/1
```





