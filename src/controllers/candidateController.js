const { candidatesFetcher, candidatesIdsFetcher } = require('../services/index')

const candidatesList = async (req, res) => {
  const toast = await req.consumeFlash('error')
  res.render('./index', { toast })
}

const getCandidatesVotes = async (req, res) => {
  try {
    const candidates = await candidatesFetcher.call()
    res.send(candidates)
  } catch (error) {
    res.status(500).send(error)
  }
}

const getCandidatesIds = async (req, res) => {
  try {
    const ids = await candidatesIdsFetcher.call()
    res.send(ids)
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = {
  candidatesList,
  getCandidatesVotes,
  getCandidatesIds,
}
