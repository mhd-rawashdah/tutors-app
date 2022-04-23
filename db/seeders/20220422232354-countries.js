'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    const countries = [
      {name: 'Kuwait', code: 'KW' },
      {name: 'Lebanon', code: 'LB' },
      {name: 'Syrian Arab Republic', code: 'SY' },
      {name: 'United Arab Emirates', code: 'AE' },
      {name: 'Iraq', code: 'IQ' },
      {name: 'Algeria', code: 'DZ' },
      {name: 'Bahrain', code: 'BH' },
      {name: 'Egypt', code: 'EG' },
      {name: 'Jordan', code: 'JO' },
    ]
    await queryInterface.bulkInsert('Countries', countries , {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Countries', null, {});
  }
};
