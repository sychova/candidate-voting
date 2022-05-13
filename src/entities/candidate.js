const BaseEntity = require('./base')

class Candidate extends BaseEntity {
  get firstName() {
    return this.attr.firstName
  }

  get lastName() {
    return this.attr.lastName
  }

  get imagePath() {
    return this.attr.imagePath
  }
}

module.exports = Candidate
