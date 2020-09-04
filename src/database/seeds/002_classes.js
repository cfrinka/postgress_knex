exports.seed = async (knex) => {
  await knex('classes').del();
  return knex('classes').insert([{
    name: 'logica de programacao'
  },
  {
    name: 'estrutura de dados'
  },
  {
    name: 'desenvolvimento web'
  },
  {
    name: 'engenharia de software'
  }
  ]);
}