'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Role, {
        foreignKey: 'roleId',
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
        as: 'role'
      });
      User.belongsTo(models.Country, {
        foreignKey: 'countryId',
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
        as: 'country'
      });
      User.hasOne(models.Tutor, {
        foreignKey: 'userId',
        as: 'tutor'
      })
    }
  }
  User.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM,
      values: ['Male', 'Female', 'other'],
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: null,
    },
    phoneNumber: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    imageURL: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: 'Roles',
        },
        key: 'id'
      }
    },
    countryId: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      references: {
        model: {
          tableName: 'Countries',
        },
        key: 'code'
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
    modelName: 'User',
  });
  return User;
};