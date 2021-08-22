const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");

// routes
const student = require("./routes/student");
const studyProgram = require("./routes/studyProgram");

require("dotenv").config();

app.use(express.json());
app.use(cors());

app.use("/api/v1", student);
app.use("/api/v1", studyProgram);

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

mongoose.set("useFindAndModify", false);
mongoose
  .connect(uri, options)
  .then(() => {
    app.listen(port, async () => {
      console.log(`Student app running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
