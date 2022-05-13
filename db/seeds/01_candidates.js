exports.seed = (knex) => {
  return knex('candidates')
    .del()
    .then(() => {
      return knex('candidates').insert([
        {
          firstName: 'Benjamin',
          lastName: 'Sisko',
          imagePath: '/img/candidates/Benjamin_Sisko.jpg',
        },
        {
          firstName: 'Christopher',
          lastName: 'Pike',
          imagePath: '/img/candidates/Christopher_Pike.jpg',
        },
        {
          firstName: 'James',
          lastName: 'Kirk',
          imagePath: '/img/candidates/James_Kirk.jpg',
        },
        {
          firstName: 'Jean-Luc',
          lastName: 'Picard',
          imagePath: '/img/candidates/Jean-Luc_Picard.jpg',
        },
        {
          firstName: 'Jonathan',
          lastName: 'Archer',
          imagePath: '/img/candidates/Jonathan_Archer.jpg',
        },
        {
          firstName: 'Kathryn',
          lastName: 'Janeway',
          imagePath: '/img/candidates/Kathryn_Janeway.jpg',
        },
      ])
    })
}
