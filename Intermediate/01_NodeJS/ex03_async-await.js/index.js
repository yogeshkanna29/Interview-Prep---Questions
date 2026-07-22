const axios = require("axios").default;

const url1 = `https://jsonplaceholder.typicode.com/users`;

async function connectToURL(url) {
  const response = await axios.get(url);
  const listOfUsers = response?.data.map((user) => {
    return user.name;
  });
  const userMap = new Map([["user_names", listOfUsers]]);
  return userMap;
}

connectToURL(url1)
  .then((data) => {
    console.log(data);
    
  })
  .catch((err) => {
    console.log(err.toString());
  });

// https://dummyjson.com/docs
// https://github.com/PacktPublishing/Node.js-Design-Patterns-Third-Edition
