exports.up = (knex) => knex.schema.createTable('users', (table) => {
    table.increments('id');
    table.string('name', 50).notNullable();
    table.string('lastname', 50).notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('update_at').defaultTo(knex.fn.now());
});


exports.down = (knex) => knex.schema.dropTable('users');