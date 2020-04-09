exports.seed = function(knex) {
  return knex("todos")
    .del()
    .then(function() {
      return knex("todos").insert([
        { name: "run", description: "Ladyburd Lake", due_date: new Date() },
        { name: "food", description: "HEB get veggies", due_date: new Date() },
        { name: "nap", description: "20 min", due_date: new Date() },
        { name: "bed", description: "make it", due_date: new Date() },
        { name: "relax", description: "with a good book", due_date: new Date() }
      ]);
    });
};
