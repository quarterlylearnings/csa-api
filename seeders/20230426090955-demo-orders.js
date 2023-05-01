'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Orders', [
      { userId: 1, ordered_date: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { userId: 2, ordered_date: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { userId: 3, ordered_date: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { userId: 4, ordered_date: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { userId: 5, ordered_date: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { userId: 6, ordered_date: new Date(), createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Orders', null, {});
  }
};
