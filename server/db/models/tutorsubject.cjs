'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TutorSubject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TutorSubject.init({
    tutorId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      references: {
        model: {
          tableName: 'Tutors',
        },
        key: 'userId'
      }
    },
    subjectId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: {
          tableName: 'Subjects',
        },
        key: 'id'
      }
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
    modelName: 'TutorSubject',
  });
  return TutorSubject;
};