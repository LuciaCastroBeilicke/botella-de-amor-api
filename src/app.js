import express from "express";
import morgan from "morgan";
const mongoose = require("mongoose");

//routes
import route from "./controllers/methods.controller";

const app = express();

//CORS
var cors = require('cors');

app.use(cors()); // Use this after the variable declaration

//settings
app.set("port", 4000);

//Middlewares
app.use(express.json());

//routes
app.use("/api", route);

mongoose.connect('mongodb+srv://user1:w6qb7BbnVhF7IDQO@botella-de-amor.peidurg.mongodb.net/',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

export default app;