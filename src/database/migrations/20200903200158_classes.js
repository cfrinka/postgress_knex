exports.up = (knex) => knex.schema.createTable('classes', (table) => {
    table.increments('id');
    table.string('name', 50).notNullable();
});
exports.down = (knex) => knex.schema.dropTable('classes');