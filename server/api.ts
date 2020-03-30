let express = require("express");
let bodyParser = require("body-parser");
let app = express();
let db = require("../db/quries.ts");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let port = process.env.PORT || 8080;
let router = express.Router();
app.use("/api", router);

router.get("/todos", db.getTodos);
router.post("/todos", db.createTodo);
router.put("/todos", db.updateTodo);
router.delete("/todos/:id", db.deleteTodo);

app.listen(port, () =>
  console.log(`Development Server running on port:🔥 ${port}🔥`)
);
