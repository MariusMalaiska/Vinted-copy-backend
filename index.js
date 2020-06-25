require("dotenv").config();

const Port = process.env.Port || process.env.DB_HOST;
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const router = require("./routes/routes");

mongoose.connect(Port, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();

const corsOptions = {
  exposedHeaders: ["x-auth-node"]
};

app.use("/upload", express.static("upload"));

app.use(cors(corsOptions));

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(bodyParser.json());

app.use("/v1", router);

app.listen(3001);
