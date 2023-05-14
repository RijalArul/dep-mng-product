const Joi = require('joi')
const { Admin } = require('../models')

const adminValidator = data => {
  const schema = Joi.object({
    nama_depan: Joi.string().required(),
    nama_belakang: Joi.string().required(),
    email: Joi.string().min(5).max(255).email().required(),
    tanggal_lahir: Joi.date().required(),
    jenis_kelamin: Joi.string().valid('pria', 'wanita'),
    password: Joi.string().min(6).max(12).required()
  })

  return schema.validate(data)
}

const profileValidator = data => {
  const schema = Joi.object({
    nama_depan: Joi.string(),
    nama_belakang: Joi.string(),
    email: Joi.string().min(5).max(255).email(),
    tanggal_lahir: Joi.date(),
    jenis_kelamin: Joi.string().valid('pria', 'wanita'),
    password: Joi.string().min(6).max(12)
  })

  return schema.validate(data)
}

function adminValidate (req, res, next) {
  const { error } = adminValidator(req.body)
  try {
    if (error) {
      throw { err: error }
    }
    next()
  } catch (err) {
    next(err)
  }
}

function profileValidate (req, res, next) {
  const { error } = profileValidator(req.body)
  try {
    if (error) {
      throw { err: error }
    }
    next()
  } catch (err) {
    next(err)
  }
}

module.exports = {
  adminValidate,
  profileValidate
}
