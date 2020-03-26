var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;
var router = express.Router();

let TEST_DATA = [
  { id: "123", name: "jog", description: "run around town lake", dueDate: 234 },
  {
    id: "345",
    name: "read",
    description: "relax on porch with Matt Ridley",
    dueDate: 768
  }
];
app.use("/api", router);

router.get("/todos", function(req, res) {
  res.json(TEST_DATA);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
