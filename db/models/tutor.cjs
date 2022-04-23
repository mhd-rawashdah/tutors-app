'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tutor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tutor.belongsTo(models.User, {
        foreignKey: 'userId',
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
        as: 'userProfile'
      });
      Tutor.belongsToMany(models.Subject, {
        through: 'TutorSubjects',
        foreignKey: 'tutorId',
        as: 'subjects'
      });
      Tutor.hasMany(models.Qualification, {
        foreignKey: 'tutorId',
        as: 'qualifications'
      })
    }
  }
  Tutor.init({
    userId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      references: {
        model: {
          tableName: 'Users',
        },
        key: 'id'
      }
    },
    jobTitle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    yearsOfExperience: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pricePerHour: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    overview: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    rating: {
      type: DataTypes.FLOAT(1,2),
      allowNull: true,
      defaultValue: 0
    },
    reviewsCount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    linkedInProfile: {
      type: DataTypes.STRING,
      allowNull: true
    },
    verifiedAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    verifiedBy: {
      type: DataTypes.UUID,
      allowNull: true
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    deletedAt: {
      allowNull: true,
      type: DataTypes.DATE,
    }
  }, {
    sequelize,
    paranoid: true,
    timestamps: true,
    modelName: 'Tutor',
  });
  return Tutor;
};