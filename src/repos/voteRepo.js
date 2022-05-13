const BaseRepo = require('./baseRepo')
const { Vote } = require('../entities')

class VoteRepo extends BaseRepo {
  static get Entity() {
    return Vote
  }

  static get table() {
    return 'votes'
  }

  async tryFindVotesById(id) {
    const votes = await this.query.where({ candidateId: id })
    return this.mapOrNull(votes)
  }
}

module.exports = VoteRepo
// map(r) {
//     if (Array.isArray(r)) {
//       return r.map((record) => this.map(record))
//     }
//     return new this.constructor.Entity(r)
//   }
