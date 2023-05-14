const { hashPassword, comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt.helpers')
const { successHandler } = require('../helpers/response-success.helpers')
const { AdminValidator } = require('../middleware/validate-input.middleware')
const { Admin } = require('../models')
class AdminController {
  static async create (req, res, next) {
    const {
      nama_depan,
      nama_belakang,
      email,
      tanggal_lahir,
      jenis_kelamin,
      password
    } = req.body
    try {
      const newAdmin = await Admin.create({
        nama_depan,
        nama_belakang,
        email,
        tanggal_lahir: new Date(tanggal_lahir).toISOString().split('T')[0],
        jenis_kelamin,
        password
      })
      successHandler(res, 201, 'create admin success', newAdmin)
    } catch (err) {
      next(err)
    }
  }

  static async login (req, res, next) {
    const { email, password } = req.body
    try {
      const admin = await Admin.findOne({
        where: {
          email: email
        }
      })

      const validPass = comparePassword(password, admin.password)

      if (!validPass) {
        throw { name: 'Unauthenthicated' }
      }

      const genAccessToken = generateToken({ id: admin.id, email: admin.email })
      successHandler(res, 200, 'Login Success', genAccessToken)
    } catch (err) {
      next(err)
    }
  }

  static async update (req, res, next) {
    const {
      nama_depan,
      nama_belakang,
      email,
      tanggal_lahir,
      jenis_kelamin,
      password
    } = req.body

    const { id } = req.params

    try {
      await Admin.update(
        {
          nama_depan,
          nama_belakang,
          email,
          tanggal_lahir,
          jenis_kelamin,
          password
        },
        {
          where: {
            id: id
          },
          individualHooks: true
        }
      )

      const admin = await Admin.findOne({
        where: {
          id: id
        }
      })

      successHandler(res, 200, admin, 'Update Admin Success')
    } catch (err) {
      next(err)
    }
  }
}

module.exports = AdminController
