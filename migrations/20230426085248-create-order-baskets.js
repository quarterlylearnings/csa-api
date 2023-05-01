'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('OrderBaskets', {
      orderId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Orders',
          key: 'id',
        },
        field: 'orderId'
      },
      basketId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Baskets',
          key: 'id',
        },
        field: 'basketId'
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('OrderBaskets');
  }
};
