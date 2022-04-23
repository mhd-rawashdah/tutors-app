'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Qualification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Qualification.belongsTo(models.Tutor, {
        foreignKey: 'tutorId',
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      })
      Qualification.belongsTo(models.QualificationType, {
        foreignKey: 'typeId',
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      })
    }
  }
  Qualification.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    tutorId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: {
          tableName: 'Tutors'
        },
        key: 'userId'
      }
    },
    typeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: 'QualificationTypes'
        },
        key: 'id'
      }
    },
    school: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    field: {
      type: DataTypes.STRING,
      allowNull: false
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    grade: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING,
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
    modelName: 'Qualification',
  });
  return Qualification;
};