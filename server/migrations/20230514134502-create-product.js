'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama: {
        allowNull: false,
        unique: false,
        type: Sequelize.STRING
      },
      desc: {
        allowNull: false,
        type: Sequelize.TEXT('long')
      },
      gambar: {
        allowNull: false,
        type: Sequelize.STRING
      },
      category_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Categories',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      admin_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Admins',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      status: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: ['active', 'inactive'],
        defaultValue: 'active'
      },
      stok: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Products')
  }
}
