nodejs-interview-master/
│
├── 01-http-server
├── 02-express
├── 03-routing
├── 04-middleware
├── 05-authentication
├── 06-jwt
├── 07-crud-api
├── 08-file-upload
├── 09-event-loop
├── 10-streams
├── 11-buffers
├── 12-events
├── 13-promises
├── 14-worker-threads
├── 15-child-process
├── 16-cluster
├── 17-redis
├── 18-mongodb
├── 19-postgresql
├── 20-microservices
├── 21-websocket
├── 22-rate-limiter
├── 23-pagination
├── 24-caching
├── 25-system-design
└── README.md

## Request and their properties

| Request            | Property                    | Value              |
| ------------------ | --------------------------- | ------------------ |
| `/users/10`        | `req.params.id`             | `"10"`             |
| `/users?page=2`    | `req.query.page`            | `"2"`              |
| POST JSON          | `req.body`                  | Request body       |
| Header             | `req.headers.authorization` | JWT token          |
| GET                | `req.method`                | `"GET"`            |
| `/users/10?page=2` | `req.url`                   | `/users/10?page=2` |
| `/users/10?page=2` | `req.path`                  | `/users/10`        |
| Any request        | `req.ip`                    | Client IP          |

## Git repos

[NodeJS]('https://github.com/nodejs/node')

[NodeJS Examples]('https://github.com/vittorioexp/Nodejs-examples')

[NodeJS Best Practices]('https://github.com/goldbergyoni/nodebestpractices')

[ExpressJS]('https://github.com/expressjs/express')

[ExpressJS Rate Limit]('https://github.com/express-rate-limit/express-rate-limit')

[JSON Web Token]('https://github.com/auth0/node-jsonwebtoken')

[Node Redis]('https://github.com/redis/node-redis')

[Mongoose]('https://github.com/Automattic/mongoose')

[NodeJS Design Pattern]('https://github.com/PacktPublishing/Node.js-Design-Patterns-Third-Editio')
