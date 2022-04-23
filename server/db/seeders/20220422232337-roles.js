'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    const roles = [
      {id: 1, name: 'Tutor'},
      {id: 2, name: 'Student'}
    ];
    await queryInterface.bulkInsert('Roles', roles, {});
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Roles', null, {});
  }
};
