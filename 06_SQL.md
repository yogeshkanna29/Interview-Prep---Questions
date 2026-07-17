# SQL Important Interview Notes

1. What is SQL?

- SQL (Structured Query Language) is used to store, retrieve, update, and delete data in a relational database.

Examples of SQL databases:
- MySQL
- PostgreSQL
- SQL Server
- Oracle

2. What is a Primary Key?

- A primary key is a column that uniquely identifies each row in a table.
- It cannot contain NULL values and must be unique.

Example
- User Table

| UserId | Name   |
| ------ | ------ |
| 1      | Yogesh |
| 2      | Rahul  |
| 3      | Priya  |

3. What is a Foreign Key?

- A foreign key is a column that creates a relationship between two tables.
- It refers the primary key of another table.

Example
- Users

| UserId | Name   |
| ------ | ------ |
| 1      | Yogesh |

- Orders

| OrderId | UserId |
| ------- | ------ |
| 101     | 1      |

Difference between Primary Key and Foreign Key

| Primary Key               | Foreign Key                       |
| ------------------------- | --------------------------------- |
| Uniquely identifies a row | References another table          |
| Must be unique            | Can have duplicate values         |
| Cannot be NULL            | Can be NULL (depending on design) |

4. What is JOIN?

- JOIN is used to combine data from two or more tables based on related column.

INNER JOIN
- Returns only matching records.

```sql
SELECT *
FROM Users
INNER JOIN Orders
ON Users.UserId = Orders.UserId;
```

LEFT JOIN
Returns:
- All rows from the left table
- Matching rows from the right table

RIGHT JOIN
Returns:
- All rows from the right table
- Matching rows from the left table

FULL JOIN
- Returns all rows from both tables.

Difference
| JOIN  | Returns                   |
| ----- | ------------------------- |
| INNER | Matching rows only        |
| LEFT  | All left + matching right |
| RIGHT | All right + matching left |
| FULL  | All rows from both tables |

5. What is GROUP BY?

- GROUP BY groups rows that have same values.
- It is usually used with aggregate functions.

Example
Orders
| Customer | Amount |
| -------- | ------ |
| A        | 100    |
| A        | 200    |
| B        | 300    |

```sql
SELECT Customer,
SUM(Amount)
FROM Orders
GROUP BY Customer;
```
Result

| Customer | Total |
| -------- | ----- |
| A        | 300   |
| B        | 300   |

6. What is HAVING?

- HAVING filters grouped data.
- It is used after GROUP BY.

```sql
SELECT Customer,
SUM(Amount)
FROM Orders
GROUP BY Customer
HAVING SUM(Amount) > 250;
```

Result

| Customer | Total |
| -------- | ----- |
| A        | 300   |
| B        | 300   |


Difference between WHERE and HAVING

| WHERE                          | HAVING                        |
| ------------------------------ | ----------------------------- |
| Filters rows before grouping   | Filters groups after grouping |
| Cannot use aggregate functions | Can use aggregate functions   |

7. What is Normalization?

- Normalization is the process of organising data to reduce duplication and improve consistency.
- Its goal is to eliminate redundant data.

First Normal Form (1NF)
- Every column contains only one value.

❌ Wrong
| Name   | Phone   |
| ------ | ------- |
| Yogesh | 111,222 |

✅ Correct
| Name   | Phone |
| ------ | ----- |
| Yogesh | 111   |
| Yogesh | 222   |

Second Normal Form (2NF)
- Removes partial dependency.
- Every non-key column should depend on the whole primary key.

Third Normal Form (3NF)
- Removes transitive dependency.
- Non-key columns should depend only on the primary key.

Benefits
- Less duplicate data
- Better consistency
- Easier maintenance

8. Aggregate Functions
- Used to calculate values.

```sql
COUNT()

SUM()

AVG()

MIN()

MAX()
```

Example

```sql
SELECT AVG(Salary)
FROM Employee;
```

9. ORDER BY
- Sorts data.

Ascending

```sql
SELECT *
FROM Employee
ORDER BY Salary ASC;
```

Descending

```sql
SELECT *
FROM Employee
ORDER BY Salary DESC;
```

10. LIMIT

- Returns only a specific number of rows.

```sql
SELECT *
FROM Employee
LIMIT 10;
```

| DELETE                | TRUNCATE         | DROP                     |
| --------------------- | ---------------- | ------------------------ |
| Removes selected rows | Removes all rows | Deletes the entire table |
| Can use WHERE         | No WHERE         | Table is removed         |
| Table remains         | Table remains    | Table no longer exists   |

Difference between CHAR and VARCHAR

CHAR
- Fixed length
- Faster for fixed-size values

VARCHAR
- Variable length
- Saves storage

What is an Index?

- An Index improves query performance by helping the database locate rows faster.

Difference between SQL and NoSQL

| SQL               | NoSQL           |
| ----------------- | --------------- |
| Tables            | Collections     |
| Rows              | Documents       |
| Fixed Schema      | Flexible Schema |
| MySQL, PostgreSQL | MongoDB         |

12. SQL Execution Order

```sql
SELECT Department,
COUNT(*)
FROM Employee
WHERE Salary > 50000
GROUP BY Department
HAVING COUNT(*) > 5
ORDER BY Department;
```

