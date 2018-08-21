
exports.up = function(knex, Promise) {
  return knex.schema.createTable('contacts', table => {
    table.increments();
    table.string('name').notNullable();
    table.timestamps(true, true);
    table.string('address');
    table.string('mobile');
    table.string('work');
    table.string('home');
    table.string('email');
    table.string('twitter');
    table.string('instagram');
    table.string('github');
    table.integer('created_by').notNullable().references('users.id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('contacts');
};
