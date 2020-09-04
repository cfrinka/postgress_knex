exports.up = (knex) => knex.schema.createTable('scores', (table) => {
    table.increments('id');
    table.integer('id_student')
        .references('students.id')
        .notNullable()
        .onDelete('CASCADE');
    table.integer('id_class')
        .references('classes.id')
        .notNullable()
        .onDelete('CASCADE')
    table.integer('score')
        .notNullable();
    table.timestamps(true, true);
});
exports.down = (knex) => knex.schema.dropTable('scores');