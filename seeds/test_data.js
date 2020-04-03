exports.seed = function(knex) {
  return knex("todos")
    .del()
    .then(function() {
      return knex("todos").insert([
        { name: "run", description: "Ladyburd Lake", due_date: 2 },
        { name: "food", description: "HEB get veggies", due_date: 33 },
        { name: "nap", description: "20 min", due_date: 8 },
        { name: "bed", description: "make it", due_date: 75 },
        { name: "relax", description: "with a good book", due_date: 16 }
      ]);
    });
};
