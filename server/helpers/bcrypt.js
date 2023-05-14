const bcrypt = require('bcrypt')
const saltRounds = 10

function hashPassword (text) {
  return bcrypt.hashSync(text, saltRounds)
}

function comparePassword (password, hashPassword) {
  return bcrypt.compareSync(password, hashPassword)
}

module.exports = {
  hashPassword,
  comparePassword
}
