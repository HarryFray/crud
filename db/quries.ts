const Pool = require("pg").Pool;

const pool = new Pool({
  user: "me",
  host: "localhost",
  database: "api",
  password: "password",
  port: 5432
});

const getTodos = (request, response) => {
  pool.query("SELECT * FROM todos ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const createTodo = (request, response) => {
  const { name, description, due_date } = request.body;

  pool.query(
    "INSERT INTO todos (name, description, due_date) VALUES ($1, $2, $3)",
    [name, description, due_date],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`Todo added with ID: ${results.insertId}`);
    }
  );
};

const updateTodo = (request, response) => {
  const { name, description, due_date, id } = request.body;

  pool.query(
    "UPDATE todos SET name=$1 ,description=$2, due_date=$3 WHERE id=$4",
    [name, description, due_date, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`Todo updated with ID: ${results.insertId}`);
    }
  );
};

const deleteTodo = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query("DELETE FROM todos WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(201).send(`Todo deleted with ID: ${id}`);
  });
};

module.exports = {
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo
};
