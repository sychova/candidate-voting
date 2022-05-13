class CandidatesFetcher {
  constructor({ candidateRepo, voteRepo }) {
    this.candidateRepo = candidateRepo
    this.voteRepo = voteRepo
  }

  async call() {
    const data = await this.candidateRepo.all()
    const totalVotes = await this.voteRepo.all()
    await Promise.all(
      data.map(async (element) => {
        const votes = await this.voteRepo.tryFindVotesById(element.id)
        element.votePercentage =
          Math.round(((votes.length * 100) / totalVotes.length) * 100) / 100
      }),
    )
    return data
  }
}
// Math.round(x * 100) / 100
module.exports = CandidatesFetcher
