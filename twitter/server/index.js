const tweets = require("../src/components/json/tweets.json");
const users = require("../src/components/json/users.json");

// import Tweets from '../json/tweets.json'
// import Users from '../json/users.json'

// const tweets = Tweets
// const users = Users

// console.log(tweets)

// const userID = tweets[0].userID;
// const likesCount = tweets[0].likes.length;
// console.log(likesCount);

// users.forEach((user) => {
//   if (user.id === userID) {
//     console.log("This tweet belongs to " + user.name);
//   }
// });

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send(tweets)
});

app.listen(8001);
