const up = knex => {
  return knex.schema.createTable("todos", function(table) {
    table.increments("id");
    table.string("name", 255).notNullable();
    table.string("description", 255).notNullable();
    table.integer("due_date");
  });
};

const down = knex => {
  return knex.schema.dropTable("todos");
};

module.exports = {
  up,
  down
};
