'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('OrderBaskets', [
      { orderId: 1, basketId: 1 },
      { orderId: 2, basketId: 2 },
      { orderId: 3, basketId: 3 },
      { orderId: 4, basketId: 4 },
      { orderId: 5, basketId: 5 },
      { orderId: 6, basketId: 1 },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('OrderBaskets', null, {});
  }
};
