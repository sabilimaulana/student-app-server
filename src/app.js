const express = require("express");

const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/", (req, res) => {
  res.send("Node Js x MongoDB");
});

app.listen(port, () => {
  console.log(`Student app running on http://localhost:${port}`);
});
