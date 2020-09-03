exports.seed = async (knex) => {
  await knex('users').del();
  return knex('users').insert([{
    name: 'richard',
    lastname: 'passos'
  },
  {
    name: 'jow',
    lastname: 'saudades'
  },
  {
    name: 'Karla',
    lastname: 'Frinka'
  },
  {
    name: 'Dear',
    lastname: 'Mama'
  },
  {
    name: 'Lost',
    lastname: 'Brother'
  }
  ]);
}