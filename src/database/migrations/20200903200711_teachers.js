exports.up = (knex) => knex.schema.createTable('teachers', (table) => {
    table.increments('id');
    table.string('name', 50).notNullable();
    table.string('lastname', 50).notNullable();
});
exports.down = (knex) => knex.schema.dropTable('teachers');