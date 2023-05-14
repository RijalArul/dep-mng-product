const Joi = require('joi')
// ADMIN VALIDATOR

function adminValidator (data) {
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

// CATEGORY VALIDATOR
function categoryValidator (data) {
  const schema = Joi.object({
    nama: Joi.string(),
    desc: Joi.string()
  })

  return schema.validate(data)
}

// PRODUCT VALIDATOR
function productValidator (data) {
  const schema = Joi.object({
    nama: Joi.string(),
    desc: Joi.string(),
    gambar: Joi.string().min(5).max(255),
    category_id: Joi.string().min(1),
    stok: Joi.string().min(1)
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

function categoryValidate (req, res, next) {
  const { error } = categoryValidator(req.body)
  try {
    if (error) {
      throw { err: error }
    }
    next()
  } catch (err) {
    next(err)
  }
}

function productValidate (req, res, next) {
  // console.log(req.file)
  const { error } = productValidator(req.body)
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
  categoryValidate,
  productValidate
}
