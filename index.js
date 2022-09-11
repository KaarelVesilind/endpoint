const express = require("express");
// const cors = require("cors");
// app.use(cors());
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 3000;
app.post("/", (req, res) => {
  const body = req.body;
  res.send(`Tere, ${body.nimi}`);
});
app.listen(port, () => console.log(`Tere app listening on port ${port}!`));
