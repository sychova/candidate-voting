const { lookup } = require('geoip-lite')
const { voteSubmitter } = require('../services/index')

const submitVote = async (req, res) => {
  try {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
    console.log(ip) // ip address of the user
    console.log(lookup(ip)) // location of the user
    // await voteSubmitter.call(req.body)
    // res.render('./index')
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = {
  submitVote,
}
