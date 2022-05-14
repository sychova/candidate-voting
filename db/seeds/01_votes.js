exports.seed = (knex) => {
  return knex('votes')
    .del()
    .then(() => {
      return knex('votes').insert([
        {
          passportNumber: 'MP0000000',
          candidateId: 6,
        },
        {
          passportNumber: 'MP0000000',
          candidateId: 6,
        },
        {
          passportNumber: 'MP0000000',
          candidateId: 6,
        },
        {
          passportNumber: 'MP0000000',
          candidateId: 3,
        },
        {
          passportNumber: 'MP0000000',
          candidateId: 3,
        },
        {
          passportNumber: 'MP0000000',
          candidateId: 3,
        },
      ])
    })
}
