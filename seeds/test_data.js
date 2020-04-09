exports.seed = function(knex) {
  return knex("todos")
    .del()
    .then(function() {
      return knex("todos").insert([
        { name: "run", description: "Ladyburd Lake", due_date: 1 },
        { name: "food", description: "HEB get veggies", due_date: 1 },
        { name: "nap", description: "20 min", due_date: 1 },
        { name: "bed", description: "make it", due_date: 1 },
        { name: "relax", description: "with a good book", due_date: 1 }
      ]);
    });
};
