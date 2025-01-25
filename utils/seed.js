// imports
const { User, Thought, Reaction } = require("../models");
const mongoose = require("mongoose");

const connection = require("../config/connection");

// seed data
const users = [
  {
    username: "mari",
    email: "maritza@gmail.com",
    thought: [],
  },
];

console.log(connection);

// connects to server
connection.once("open", async () => {
  console.log("connected");

// drop existing users
  await User.deleteMany({});

// adds seed data to database
  await User.collection.insertMany(users);

  console.table(users);
  console.info("Seeding complete!");
  process.exit(0);
});