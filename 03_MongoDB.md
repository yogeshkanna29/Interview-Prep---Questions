# MongoDB Important Interview Notes

1. What is MongoDB?

- MongoDB is NoSQL, document-based database.
- It stores data as documents in collections using a JSON-like format called BSON.
- Unlike SQL databases, MongoDB does not store data in rows and tables.

Example Document :

```json
{
  "_id": "687c12345",
  "name": "Yogesh",
  "email": "yogesh@gmail.com"
}
```

Key Features

- NoSQL Database
- Flexible Schema
- High Performance
- Scalable
- Stores JSON-like documents

2. What are Indexes?

- Indexes improve the speed of queries by allowing MongoDB to find data quickly without scanning every document.
- Without an index, MongoDB performs a collection scan, which is slower.

```js
db.users.createIndex({ email: 1 });
```

Now MongoDB can quickly locate a user by email.

Benefits

- Faster search
- Faster sorting
- Better query performance

Disadvantage

- Indexes use extra storage and slightly slow down insert/update operations because the index must also be updated.

3. What is Aggregation?

- Aggregation is used to process and analyze data | Aggregation is used to analyze and transform data.
- It performs operations like filtering, grouping, sorting, counting, and calculating values.
- Aggregation uses a Pipeline, where each stage processes the output of the previous stage.

Example :

```js
db.orders.aggregate([
  {
    $match: {
      status: "completed",
    },
  },
  {
    $group: {
      _id: "$customerId",
      total: {
        $sum: "$amount",
      },
    },
  },
]);
```

Common Pipeline Stages

- $match → Filter
- $group → Group data
- $sort → Sort data
- $project → Select fields
- $limit → Limit results
- $lookup → Join collections

4. Embedding vs Referencing

Embedding

- Related data stored inside the same document.

Example:

```js
{
  "name": "Yogesh",
  "address": {
    "city": "Bangalore",
    "state": "Karnataka"
  }
}
```

Advantages

- Faster reads
- Single query
- Simple structure

Best For

- Data that is always accessed together.

Referencing

- Related data stored in separate collections.

Example

Users Collection

```json
{
  "_id": 1,
  "name": "Yogesh"
}
```

Orders Collection

```json
{
  "userId": 1,
  "product": "Laptop"
}
```

Advantages

- Avoids duplicate data
- Better for large datasets
- Easier to maintain

Best For

- One-to-many or many-to-many relationships.

| Embedding                   | Referencing                  |
| --------------------------- | ---------------------------- |
| Data inside same document   | Data stored separately       |
| Faster reads                | Less duplication             |
| Good for small related data | Good for large relationships |

5. What is ObjectId?

- Every MongoDB document has a unique \_id field.
- By default, MongoDB generates an ObjectId.

An ObjectId contains:

- Timestamp
- Machine Identifier
- Process Identifier
- Counter

Benefits

- Unique
- Automatically generated
- Helps identify documents

6. What are Transactions?

- Transcations allow multiple database operations to succeed or fail together | Transactions ensure that multiple operations are completed safely as a single unit.
- If one operation fails, MongoDB rolls back all changes.
- This maintains data consistency.

Bank Transfer

```js
Deduct ₹100

↓

Add ₹100

↓

Commit
```

7. What is a Mongoose Schema?

A Schema defines the structure of documents in a MongoDB collection.

It specifies:

- Fields
- Data types
- Validation rules
- Default values

Example

```js
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});
```

Then create a model

```js
const User = mongoose.model("User", UserSchema);
```

Benefits

- Validation
- Organized structure
- Easy data management

8. What is Population?

- Population is a Mongoose feature that replaces a referrenced ObjectId with the actual document.
- Instead of returning only the ID, it returns the related data.

User Collection

```json
{
  "_id": 1,
  "name": "Yogesh"
}
```

Post Collection

```json
{
  "title": "Node.js",
  "user": 1
}
```

Without Population

```json
{
  "title": "Node.js",
  "user": 1
}
```

With Population

```js
Post.find().populate("user");
```

Result

```json
{
  "title": "Node.js",
  "user": {
    "name": "Yogesh"
  }
}
```

9. MongoDB vs SQL

| MongoDB            | SQL                 |
| ------------------ | ------------------- |
| NoSQL              | Relational Database |
| Collections        | Tables              |
| Documents          | Rows                |
| Flexible Schema    | Fixed Schema        |
| BSON               | Rows & Columns      |
| Horizontal Scaling | Vertical Scaling    |



10. Common CRUD Operations

Create

```js
await user.create({
  name: "Yogesh",
});
```

Read

```js
await user.find();
```

Update

```js
await user.findByIdAndUpdate(id, {
  name: "Jhon",
});
```

Delete 

```js
await user.findByIdAndDelete(id);
```


