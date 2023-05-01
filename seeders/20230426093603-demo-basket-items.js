'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('BasketItems', [
      { basketId: 1, itemId: 1 },
      { basketId: 1, itemId: 2 },
      { basketId: 1, itemId: 3 },
      { basketId: 2, itemId: 4 },
      { basketId: 2, itemId: 5 },
      { basketId: 2, itemId: 6 },
      { basketId: 3, itemId: 7 },
      { basketId: 3, itemId: 8 },
      { basketId: 3, itemId: 9 },
      { basketId: 4, itemId: 10 },
      { basketId: 4, itemId: 11 },
      { basketId: 4, itemId: 12 },
      { basketId: 5, itemId: 13 },
      { basketId: 5, itemId: 14 },
      { basketId: 5, itemId: 15 },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
