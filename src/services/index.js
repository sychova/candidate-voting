const { candidateRepo, voteRepo } = require('../repos')
const CandidatesFetcher = require('./candidatesFetcher')
const CandidatesIdsFetcher = require('./candidatesIdsFetcher')
const VoteSubmitter = require('./voteSubmitter')

module.exports = {
  candidatesFetcher: new CandidatesFetcher({ candidateRepo, voteRepo }),
  candidatesIdsFetcher: new CandidatesIdsFetcher({ candidateRepo }),
  voteSubmitter: new VoteSubmitter({ voteRepo }),
}
