const MongoClient = require("mongodb").MongoClient;

// Database Name
const dbName = "vinted-copy";

// Connection URL
// const url = `mongodb+srv://admin:admin@cluster0.mgmwl.mongodb.net/vinted-copy?retryWrites=true&w=majority`;
// console.error(url);
let db;
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Connected successfully to server");

  db = client.db(dbName);
});

module.exports = db;
