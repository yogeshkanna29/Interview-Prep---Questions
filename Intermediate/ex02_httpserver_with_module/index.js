const http = require("http");
const today = require("./today");
const seasons = require("./constants");
require("./auto");
const { currentWeather } = require("./constants");

const requestListener = function (req, res) {
  const url = new URL(req.url, `http://${req.headers.url}`);
  const name = url.searchParams.get("name") || "Guest";
  const dateVal = today();
  let greetings = `Keep sleeping, it is still not morning: ${dateVal.getHours()}`;

  if (dateVal.getHours() >= 5 && dateVal.getHours() < 12) {
    greetings = `Good Morning ${name} | Time - ${dateVal.getHours()} : ${dateVal.getMinutes()}`;
  } else if (dateVal.getHours >= 12 && dateVal.getHours() < 18) {
    greetings = `Good Afternoon ${name} | Time - ${dateVal.getHours()} : ${dateVal.getMinutes()}`;
  } else if (dateVal.getHours() >= 18 && dateVal.getHours() < 12) {
    greetings = `Good Evening ${name} | Time - ${dateVal.getHours()} : ${dateVal.getMinutes()}`;
  } else if (dateVal.getHours() >= 21 && dateVal.getHours() < 23) {
    greetings = `Good Night ${name} | Time - ${dateVal.getHours()} : ${dateVal.getMinutes()}`;
  }
  res.end(
    `Hello, ${greetings} | Weather ${currentWeather} | Season ${seasons.A}`,
  );
};

const port = 5000;
const server = http.createServer(requestListener);
server.listen(port, () => {
  console.log(`server running on port ${port}`);
});
