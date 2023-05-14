'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      Transaction.belongsTo(models.Admin, {
        foreignKey: 'admin_id'
      })

      Transaction.belongsTo(models.Product, {
        foreignKey: 'product_id'
      })
    }
  }
  Transaction.init(
    {
      nama_product: DataTypes.STRING,
      stock_product: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      type: DataTypes.ENUM('in', 'out'),
      balance: DataTypes.INTEGER,
      product_id: DataTypes.INTEGER,
      admin_id: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Transaction'
    }
  )
  return Transaction
}
