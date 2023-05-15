const { successHandler } = require('../helpers/response-success.helpers')
const { Transaction, Product, sequelize } = require('../models')
class TransactionProduct {
  constructor (
    nama_product,
    stock_product,
    quantity,
    type,
    balance,
    product_id,
    admin_id
  ) {
    this.nama_product = nama_product
    this.stock_product = stock_product
    this.quantity = quantity
    this.type = type
    this.balance = balance
    this.product_id = product_id
    this.admin_id = admin_id
  }
}

class TransactionController {
  static async create (req, res, next) {
    const t = await sequelize.transaction()
    try {
      let transactions = []
      for (let i = 0; i < req.body.length; i++) {
        const { quantity, type } = req.body[i]
        const product = await Product.findOne({
          where: {
            id: req.body[i].product_id
          }
        })

        const balance =
          type === 'out' ? product.stok + quantity : product.stok + quantity

        if (balance < 0) {
          throw { name: 'BalanceOutOfStock' }
        }
        transactions.push(
          new TransactionProduct(
            product.nama,
            product.stok,
            quantity,
            type,
            balance,
            product.id,
            req.userData.id
          )
        )

        await Product.update(
          { stok: balance },
          {
            where: {
              id: product.id
            }
          },
          { transaction: t }
        )
      }

      const newTransactions = await Transaction.bulkCreate(transactions, {
        transaction: t
      })

      successHandler(res, 201, 'Success Create Transactions', newTransactions)
      await t.commit()
    } catch (err) {
      await t.rollback()
      next(err)
    }
  }

  static async getAll (req, res) {
    try {
      const transactions = await Transaction.findAll()
      successHandler(res, 200, 'Success Get All Transactions', transactions)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = TransactionController
