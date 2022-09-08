const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(cors());
const port = 3000;
app.post("/", (req, res) => {
  const body = req.body;
  res.send(`Tere, ${body.nimi}`);
});
app.listen(port, () => console.log(`Tere app listening on port ${port}!`));
