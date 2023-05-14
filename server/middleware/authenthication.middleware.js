const jwt = require('jsonwebtoken')
function authenthication (req, res, next) {
  try {
    const headers = req.headers.access_token
    const payload = jwt.verify(headers, process.env.SECRET_KEY_JWT)
    req.userData = payload
    next()
  } catch (err) {
    next(err)
  }
}

module.exports = {
  authenthication
}
