'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      Product.belongsTo(models.Admin, {
        foreignKey: 'admin_id'
      })

      Product.belongsTo(models.Category, {
        foreignKey: 'category_id'
      })

      Product.hasMany(models.Transaction, {
        foreignKey: 'product_id'
      })
    }
  }
  Product.init(
    {
      nama: {
        type: DataTypes.STRING
      },
      desc: {
        type: DataTypes.TEXT
      },
      gambar: {
        type: DataTypes.STRING
      },
      category_id: {
        type: DataTypes.INTEGER
      },
      admin_id: {
        type: DataTypes.INTEGER
      },
      stok: {
        type: DataTypes.INTEGER,
        validate: {
          min: 0
        }
      },
      status: {
        type: DataTypes.ENUM('active', 'inactive')
      }
    },
    {
      sequelize,
      modelName: 'Product'
    }
  )
  return Product
}
