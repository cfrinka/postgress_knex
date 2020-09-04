exports.up = (knex) => knex.schema.createTable('students', (table) => {
    table.increments('id');
    table.string('name', 50).notNullable();
    table.string('lastname', 50).notNullable();
    table.integer('id_group')
        .references('groups.id')
        .onDelete('SET NULL');
});
exports.down = (knex) => knex.schema.dropTable('students');