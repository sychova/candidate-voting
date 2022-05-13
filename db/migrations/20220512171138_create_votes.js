exports.up = async (knex) => {
  await knex.schema.createTable('votes', (t) => {
    t.increments()
    t.string('passport_number').notNullable()
    t.integer('candidate_id').references('id').inTable('candidates').unsigned()
  })
}

exports.down = async (knex) => {
  await knex.schema.dropTable('votes')
}
