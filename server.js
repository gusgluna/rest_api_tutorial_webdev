require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

// db conection
mongoose.connect(process.env.DATA_BASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.error("Conected to DataBase"));

// Express configuration

const app = express();

app.use(express.json());
const subscribersRouter = require("./routes/subscribers");
app.use("/subscribers", subscribersRouter);

app.listen(3000, () => console.log("Server Started!!!"));
