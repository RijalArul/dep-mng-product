const jwt = require('jsonwebtoken')
const secretKey = process.env.SECRET_KEY_JWT
function generateToken (payload) {
  //   return jwt.sign(payload, secretOrPrivateKey, [options, callback])
  return jwt.sign(payload, secretKey)
}

module.exports = {
  generateToken
}
