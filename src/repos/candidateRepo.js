const BaseRepo = require('./baseRepo')
const { Candidate } = require('../entities')

class CandidateRepo extends BaseRepo {
  static get Entity() {
    return Candidate
  }

  static get table() {
    return 'candidates'
  }
}

module.exports = CandidateRepo
