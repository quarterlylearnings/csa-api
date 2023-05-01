'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('BasketItems', {
      basketId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Baskets',
          key: 'id',
        },
        field: 'basketId',
      },
      itemId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Items',
          key: 'id',
        },
        field: 'itemId'
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('BasketItems');
  }
};
