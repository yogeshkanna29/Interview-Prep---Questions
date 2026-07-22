# Express.js Important Interview Notes

1. What is Express.js?

- Express.js is a lightweight web framework for Node.js used to build web applications and REST APIs.
- It makes routing, middleware, request handling, and response handling easier then Node.js alone.

Key features : 
- Routing
- Middleware
- REST API development
- Error handling
- Request and response handling

2. Middleware Execution Order

- Middleware functions execute in the same order they are registered.
Each middleware receives:
- Request (req)
- Response (res)
- Next (next)

Calling next() passes control to the next middleware.

```js
app.use((req, res, next) => {
    console.log("Middleware 1");
    next();
});

app.use((req, res, next) => {
    console.log("Middleware 2");
    next();
});

app.get("/", (req, res) => {
    res.send("Home");
});
```

3. Route Parameters vs Query Parameters

Route Parameters
- Used to identify a specific resource.

Example
```js
GET /users/10

app.get("/users/:id", (req, res) => {
    console.log(req.params.id);
});
```

Query Parameters
- Used for filtering, searching, pagination, or sorting.

Example
```js
GET /users?page=1&limit=10

app.get("/users", (req, res) => {
    console.log(req.query.page);
});
```

4. Error Middleware

- Error middleware catches errors and sends a proper response to the client.
- It prevents the server from crashing.

Example
```js
app.use((err, req, res, next) => {
    res.status(500).json({
        success: false,
        message: err.message
    });
});
```

5. Authentication Middleware

- Authentication middleware checks whether the user is logged in before allowing access to protect routes.

Example

```js
function auth(req, res, next) {

    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({
            message: "Unauthorized"
        });
    }

    next();
}
```

Usage

```js
app.get("/profile", auth, (req, res) => {
    res.send("Welcome");
});
```

6. What is CORS?

- CORS stands for Cross-Origin Resource Sharing.
- It allows a frontend from one origin to access a backend hosted on another origin.

Without CORS, Browser blocks the request.

```js
const cors = require("cors");
app.use(cors());
```

7. Rate Limiting

- Rate limiting limits the number of requests a user can make in a certain time.
- It protects APIs from abuse and brute-force attacks.

```js
const rateLimit = require("express-rate-limit");

app.use(rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
}));

// 100 requests
// Every 15 minutes
```

8. Validation

- Validation checks whether incoming data is correct before saving it to the database.

Validate
- Email
- Password
- Name
 
Popular Libraries
- express-validator
- Joi
- Zod

```js
if (!email) {
    return res.status(400).json({
        message: "Email is required"
    });
}
```

9. JWT Implementation

- JWT is used to authenticate users.

Flow

```js
User Login

↓

Server verifies email/password

↓

Generate JWT

↓

Send token to frontend

↓

Frontend stores token

↓

Token sent in Authorization Header

↓

Middleware verifies token

↓

Access Granted
```

Example : 

Generate Token

```js
const token = jwt.sign(
    { id: user._id },
    SECRET_KEY,
    { expiresIn: "1h" }
);
```

Verify Token

```js
jwt.verify(token, SECRET_KEY);
```

10. File Upload

- Express uses Multer to upload files.

Example

```js
const multer = require("multer");

const upload = multer({
    dest: "uploads/"
});
```

Usage

```js
app.post(
    "/upload",
    upload.single("image"),
    (req, res) => {
        res.send("Uploaded");
    }
);
```

Use Cases

- Profile Picture
- Documents
- Images
- PDFs

11. REST API Best Practices

Use Proper HTTP Methods

- GET
- POST
- PUT
- PATCH
- DELETE

Use Proper Status Codes

- 200 OK
- 201 Created
- 400 Bad Request
- 401 Unauthorized
- 403 Forbidden
- 404 Not Found
- 500 Internal Server Error

Return JSON

```js
res.json({
    success: true,
    data: users
});
```
Handle Errors Properly

```js
return res.status(500).json({
    success: false,
    message: "Internal Server Error"
});
```

Validate Input
- Always validate request data before processing.

Use Authentication
- Protect sensitive APIs with JWT or session authentication.

Support Pagination
- Instead of returning thousands of records,

Use

```js
GET /users?page=1&limit=10
```

12. Request Lifecycle in Express

```js
Client Request
      │
      ▼
Middleware
      │
      ▼
Authentication Middleware
      │
      ▼
Validation Middleware
      │
      ▼
Route
      │
      ▼
Controller
      │
      ▼
Database
      │
      ▼
Response
```





