const knex = require('../utils/knex')
const CandidateRepo = require('./candidateRepo')
const VoteRepo = require('./voteRepo')

const candidateRepo = new CandidateRepo(knex)
const voteRepo = new VoteRepo(knex)

module.exports = {
  candidateRepo,
  voteRepo,
}
