require('dotenv').config();
const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;
// const dbPassword = 
const uri = `mongodb+srv://${dbUsername}:${dbPassword}@cluster0.lrlvhzp.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`;

// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(uri);
  console.log("Mongoose connected Successfully");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

module.exports = {
  main
}