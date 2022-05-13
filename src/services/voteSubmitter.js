class VoteSubmitter {
  constructor({ voteRepo }) {
    this.voteRepo = voteRepo
  }

  call(vote) {
    return this.voteRepo.create(vote)
  }
}

module.exports = VoteSubmitter
