const { Router } = require('express')

const candidates = require('../src/controllers/candidateController')
const votes = require('../src/controllers/voteController')

const router = new Router()

router.get('/', (req, res) => {
  res.render('./index')
})

router.get('/candidatesIds', candidates.getCandidatesIds)
router.get('/candidatesVotes', candidates.getCandidatesVotes)
router.post('/vote', votes.submitVote)

module.exports = router
