exports.seed = async (knex) => {
  await knex('groups').del();
  return knex('groups').insert([{
    name: 'A'
  },
  {
    name: 'B'
  },
  {
    name: 'C'
  },
  {
    name: 'D'
  }
  ]);
}