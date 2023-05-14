'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      Category.belongsTo(models.Admin, {
        foreignKey: 'admin_id'
      })

      Category.hasMany(models.Product, {
        foreignKey: 'category_id'
      })
    }
  }
  Category.init(
    {
      nama: {
        type: DataTypes.STRING
      },
      desc: {
        type: DataTypes.TEXT('long')
      },
      admin_id: {
        type: DataTypes.INTEGER
      }
    },
    {
      sequelize,
      modelName: 'Category'
    }
  )
  return Category
}
