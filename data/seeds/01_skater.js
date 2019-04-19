
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, name: 'Nyjah Huston'},
        {id: 2, name: 'Andrew Reynolds'},
        {id: 3, name: 'Antwuan Dixon'}
      ]);
    });
};
