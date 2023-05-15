const { successHandler } = require('../helpers/response-success.helpers')
const { Product, Category } = require('../models')
class ProductController {
  static async create (req, res, next) {
    const { nama, desc, stok, category_id } = req.body
    try {
      const category = await Category.findByPk(category_id)

      if (!category) {
        throw { name: 'RecordNotFound' }
      }
      const newProduct = await Product.create({
        nama,
        desc,
        gambar: `http://localhost:3000/uploads/${req.file.filename}`,
        stok,
        category_id: category.id,
        admin_id: req.userData.id
      })

      successHandler(res, 201, 'Success Create Product', newProduct)
    } catch (err) {
      //   console.log(err)
      next(err)
    }
  }

  static async getAll (req, res, next) {
    try {
      const products = await Product.findAll()
      successHandler(res, 200, 'Success Get Products', products)
    } catch (err) {
      next(err)
    }
  }

  static async get (req, res, next) {
    const { id } = req.params
    try {
      const product = await Product.findByPk(id)
      if (!product) {
        throw { name: 'RecordNotFound' }
      }
      successHandler(res, 200, 'Success Get Product', product)
    } catch (err) {
      next(err)
    }
  }

  static async update (req, res, next) {
    const { id } = req.params
    const { nama, desc, stok, category_id } = req.body

    try {
      const product = await Product.findByPk(id)
      if (!product) {
        throw { name: 'RecordNotFound' }
      }

      await product.update({
        nama,
        desc,
        gambar: !req.file.filename
          ? product.gambar
          : `http://localhost:3000/uploads/${req.file.filename}`,
        stok,
        category_id
      })

      successHandler(res, 200, 'Success Update Product', product)
    } catch (err) {
      next(err)
    }
  }

  static async delete (req, res, next) {
    const { id } = req.params
    try {
      await Product.update(
        { status: 'inactive' },
        {
          where: {
            id: id
          }
        }
      )
      successHandler(res, 200, 'Success Update Product', null)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = ProductController
