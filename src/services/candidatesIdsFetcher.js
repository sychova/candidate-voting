class CandidatesIdsFetcher {
  constructor({ candidateRepo }) {
    this.candidateRepo = candidateRepo
  }

  async call() {
    const ids = await this.candidateRepo.ids()
    const idsArr = ids.map((object) => {
      return object.id
    })
    return idsArr
  }
}

module.exports = CandidatesIdsFetcher
