const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
const Student = require("./models/student");

require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use("/", (req, res) => {
  res.send("Node Js x MongoDB");
});

const { MONGODB_LOCAL_DBNAME } = process.env;
const uri = `mongodb://127.0.0.1:27017/${MONGODB_LOCAL_DBNAME}`;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

mongoose.set("useFindAndModify", true);
mongoose
  .connect(uri, options)
  .then(() => {
    app.listen(port, async () => {
      console.log(`Student app running on http://localhost:${port}`);

      // const newStudentModel = new Student({
      //   name: "Sabili",
      //   email: "sabili@gmail.com",
      // });

      // const newStudent = await newStudentModel.save();
    });
  })
  .catch((error) => {
    console.log(error);
  });
