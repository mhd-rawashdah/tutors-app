'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const subjects = [
      { id: 1, name: 'JAVA'},
      { id: 2, name: 'Object Orientated Programming'},
      { id: 3, name: 'Database Design'},
      { id: 4, name: 'Cloud Computing'},
      { id: 5, name: 'JavaScript'},
      { id: 6, name: 'Asp.net'},
      { id: 7, name: 'Design Pattern'},
    ];
    
    await queryInterface.bulkInsert('Subjects', subjects, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Subjects', null, {});
  }
};
