const { voteSubmitter } = require('../services/index')

const submitVote = async (req, res) => {
  try {
    await voteSubmitter.call(req.body)
    res.render('./index')
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = {
  submitVote,
}
