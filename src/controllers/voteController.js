const { lookup } = require('geoip-lite')
const { voteSubmitter } = require('../services/index')

const submitVote = async (req, res) => {
  try {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
    if (lookup(ip).country !== 'BY') {
      await req.flash('error', 'Sorry, voting only allowed from Belarus.')
    }

    await voteSubmitter.call(req.body)
    res.redirect('/')
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = {
  submitVote,
}
