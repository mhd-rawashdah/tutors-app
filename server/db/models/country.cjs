'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Country extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Country.hasMany(models.User, {
        foreignKey: 'countryId'
      })
    }
  }
  Country.init({
    code: {
      allowNull: false,
      type: DataTypes.CHAR(2),
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phonecode: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Country',
  });
  return Country;
};