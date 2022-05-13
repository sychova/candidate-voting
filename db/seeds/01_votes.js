exports.seed = (knex) => {
  return knex('votes')
    .del()
    .then(() => {
      return knex('votes').insert([
        {
          passportNumber: '123456789',
          candidateId: 1,
        },
        {
          passportNumber: '123456789',
          candidateId: 1,
        },
        {
          passportNumber: '123456789',
          candidateId: 1,
        },
        {
          passportNumber: '123456789',
          candidateId: 2,
        },
        {
          passportNumber: '123456789',
          candidateId: 2,
        },
        {
          passportNumber: '123456789',
          candidateId: 2,
        },
      ])
    })
}
