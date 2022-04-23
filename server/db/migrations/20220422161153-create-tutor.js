'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tutors', {
      userId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: 'Users',
          },
          key: 'id'
        }
      },
      jobTitle: {
        type: Sequelize.STRING,
        allowNull: false
      },
      yearsOfExperience: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      pricePerHour: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      overview: {
        type: Sequelize.STRING(500),
        allowNull: true
      },
      rating: {
        type: Sequelize.FLOAT,
        allowNull: true,
        defaultValue: 0.0
      },
      reviewsCount: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      linkedInProfile: {
        type: Sequelize.STRING,
        allowNull: true
      },
      verifiedAt: {
        type: Sequelize.DATE,
        allowNull: true
      },
      verifiedBy: {
        type: Sequelize.UUID,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tutors');
  }
};