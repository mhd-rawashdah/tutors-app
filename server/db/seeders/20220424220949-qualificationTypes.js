'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const types = [
      { id: 1, name: 'Bachelor Degree'},
      { id: 2, name: 'Diploma'},
      { id: 3, name: 'Certificate'},
      { id: 4, name: 'Postgraduate Study'}
    ];
    
    await queryInterface.bulkInsert('QualificationTypes', types, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('QualificationTypes', null, {});
  }
};
