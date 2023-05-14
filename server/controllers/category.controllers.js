const { successHandler } = require('../helpers/response-success.helpers')
const { Category } = require('../models')
class CategoryController {
  static async create (req, res, next) {
    const { nama, desc } = req.body
    try {
      const newCategory = await Category.create({
        nama,
        desc,
        admin_id: req.userData.id
      })
      successHandler(res, 201, 'Success Create Category', newCategory)
    } catch (err) {
      next(err)
    }
  }

  static async getAll (req, res, next) {
    try {
      const categories = await Category.findAll()
      successHandler(res, 200, 'Success Get Categories', categories)
    } catch (err) {
      next(err)
    }
  }

  static async get (req, res, next) {
    const { id } = req.params
    try {
      const category = await Category.findByPk(id)
      if (!category) {
        throw { name: 'RecordNotFound' }
      }
      successHandler(res, 200, 'Success Get category', category)
    } catch (err) {
      next(err)
    }
  }

  static async update (req, res, next) {
    const { id } = req.params
    const { nama, desc } = req.body
    try {
      const category = await Category.findByPk(id)
      await category.update({ nama, desc })
      await category.save()

      successHandler(res, 200, 'Success Update Category', category)
    } catch (err) {
      next(err)
    }
  }

  static async delete (req, res, next) {
    const { id } = req.params
    try {
      await Category.destroy({
        where: {
          id: id
        }
      })

      successHandler(res, 200, 'Success Delete Category', {})
    } catch (err) {
      next(err)
    }
  }
}

module.exports = CategoryController
