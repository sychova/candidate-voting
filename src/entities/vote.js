const BaseEntity = require('./base')

class Vote extends BaseEntity {
  get passportNumber() {
    return this.attr.passportNumber
  }

  get candidateId() {
    return this.attr.candidateId
  }
}

module.exports = Vote
