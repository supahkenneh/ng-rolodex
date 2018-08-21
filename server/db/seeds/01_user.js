
exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {id: 1, username: 'kenny'},
        {id: 2, username: 'isaac'},
        {id: 3, username: 'henry'}
      ]);
    });
};
