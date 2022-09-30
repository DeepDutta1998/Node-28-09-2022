const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.set("view engine", "ejs");
app.set("views", "views");

const studentRoutes = require("./routes/student.routes");
app.use(studentRoutes);

const port = process.env.PORT || 2020;

const dbDriver =
  "mongodb+srv://debashis:R7KmV58sN3smMeN@cluster0.eihs8.mongodb.net/StudentCRUD";

mongoose
  .connect(dbDriver, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    app.listen(port, () => {
      console.log("DB connected");
      console.log(`Server is running @ http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("DB is not connected");
    console.log(err);
  });
