
exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {id: 1, username: 'kenny', password: 'password'},
        {id: 2, username: 'isaac', password: 'password'},
        {id: 3, username: 'henry', password: 'password'}
      ]);
    });
};
