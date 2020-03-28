var express = require("express");
var bodyParser = require("body-parser");
var app = express();
const db = require("../db/quries.ts");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;
var router = express.Router();
app.use("/api", router);

router.get("/todos", db.getTodos);
router.post("/todos", db.createTodo);
router.put("/todos", db.updateTodo);
router.delete("/todos/:id", db.deleteTodo);

app.listen(port, () =>
  console.log(`Development Server running on port: ${port}`)
);
