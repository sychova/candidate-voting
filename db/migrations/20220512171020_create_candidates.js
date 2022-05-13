exports.up = async (knex) => {
  await knex.schema.createTable('candidates', (t) => {
    t.increments()
    t.string('first_name').notNullable()
    t.string('last_name').notNullable()
    t.string('image_path').notNullable()
  })
}

exports.down = async (knex) => {
  await knex.schema.dropTable('candidates')
}
