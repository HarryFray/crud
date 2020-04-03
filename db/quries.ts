const knex = require("knex")({
  client: "pg",
  connection: {
    user: "me",
    host: "localhost",
    database: "api",
    password: "password",
    port: 5432
  },
  seeds: {
    directory: "./seeds/dev"
  },
  searchPath: ["knex", "public"]
});

const getTodos = (_, response) => {
  knex("todos")
    .select("name", "id", "description", "due_date")
    .then(results => {
      response.status(200).json(results);
    });
};

const createTodo = (request, response) => {
  const { name, description, due_date } = request.body;
  knex("todos")
    .insert({ name, description, due_date })
    .then(result => {
      response.status(201).send(`Todo added with ID: ${result.id}`);
    });
};

const updateTodo = (request, response) => {
  const { name, description, due_date, id } = request.body;
  knex("todos")
    .where({ id })
    .update({ name, description, due_date })
    .then(result => {
      response.status(201).send(`Todo updated with ID: ${result.id}`);
    });
};

const deleteTodo = (request, response) => {
  const id = parseInt(request.params.id);
  knex("todos")
    .where({ id })
    .del()
    .then(() => {
      response.status(201).send(`Todo deleted with ID: ${id}`);
    });
};

module.exports = {
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo
};
