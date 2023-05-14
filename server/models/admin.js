'use strict'
const { Model } = require('sequelize')
const { hashPassword } = require('../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  }
  Admin.init(
    {
      nama_depan: {
        type: DataTypes.STRING
      },
      nama_belakang: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true
        }
      },
      tanggal_lahir: {
        type: DataTypes.STRING,
        validate: {
          isDate: true
        }
      },
      jenis_kelamin: {
        type: DataTypes.ENUM('pria', 'wanita'),
        validate: {
          isIn: [['pria', 'wanita']]
        }
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          len: [6, 14]
        }
      }
    },
    {
      sequelize,
      modelName: 'Admin',
      hooks: {
        beforeCreate (instance, options) {
          instance.password = hashPassword(instance.password)
        },
        beforeUpdate (instance, options) {
          instance.password = hashPassword(instance.get('password'))
        }
      }
    }
  )
  return Admin
}
