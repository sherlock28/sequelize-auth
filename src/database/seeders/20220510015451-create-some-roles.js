'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([

      queryInterface.bulkInsert('Roles', [
        { role: 'admin', createdAt: new Date(), updatedAt: new Date(), },
        { role: 'user', createdAt: new Date(), updatedAt: new Date(), },
      ], {}),

      queryInterface.bulkInsert('user_role', [
        { user_id: 1, role_id: 1, createdAt: new Date(), updatedAt: new Date(), },
        { user_id: 1, role_id: 2, createdAt: new Date(), updatedAt: new Date(), },
        { user_id: 2, role_id: 2, createdAt: new Date(), updatedAt: new Date(), },
      ], {}),

    ]);
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bulkInsert('Roles', null, {}),
      queryInterface.bulkInsert('user_role', null, {}),
    ]);
  }
};
