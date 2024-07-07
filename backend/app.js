const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const postRouter = require("./routes/postRoutes");

const app = express();

mongoose.set("strictQuery", "false");
const mongoDB = `mongodb+srv://dario:${process.env.SECRET_KEY}@cluster0.uvidgno.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

app.use("/", postRouter);

app.listen(3000, () => {
  console.log("BlogAPI listens on Port 3000.");
});
