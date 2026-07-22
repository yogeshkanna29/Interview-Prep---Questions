/** Common JS */

const http = require("http");

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end("Hello worlds");
};

const port = 5000;
const server = http.createServer(requestListener);
console.log(`Server running on port : ${port}`);
server.listen(port);

/** ES Modules (Modern) */

import http from "http";

const requestListener = (req, res) => {
  res.writeHead(200);
  res.end("Hello worlds");
};

const port = 5000;
const server = http.createServer(requestListener);

server.listen(port, () => {
  console.log(`Server running on port : ${port}`);
});
