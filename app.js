const express = require("express");
const app = express();
const todo = require("./routes/todoRoutes");
require("dotenv").config();
const notfound = require("./middleware/notfound");
// db connect
const mongoose = require("mongoose");
mongoose
  .connect(process.env.DBURL)
  .then(() => console.log("connected to db"))
  .catch((err) => console.log(err));

// middleware
app.use(express.json());

// routes
app.use("/todoapi", todo);
app.use(notfound);

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
