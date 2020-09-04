exports.seed = async (knex) => {
  await knex('teachers').del();
  return knex('teachers').insert([{
    name: 'rafael',
    lastname: 'magalhaes'
  }]);
}