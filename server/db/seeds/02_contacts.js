
exports.seed = function(knex, Promise) {
  return knex('contacts').del()
    .then(function () {
      return knex('contacts').insert([
        {id: 1, name: 'kelly', created_by: 3},
        {id: 2, name: 'angel', created_by: 2},
        {id: 3, name: 'sun', created_by: 1}
      ]);
    });
};
