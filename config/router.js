const { Router } = require('express')

const candidates = require('../src/controllers/candidateController')
const votes = require('../src/controllers/voteController')

const router = new Router()

router.get('/', candidates.candidatesList)

router.get('/candidatesIds', candidates.getCandidatesIds)
router.get('/candidatesVotes', candidates.getCandidatesVotes)
router.post('/vote', votes.submitVote)

module.exports = router
