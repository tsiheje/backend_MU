'use strict';
const { Model } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize, DataTypes) => {
  class Cooperatives extends Model {
    static associate(models) {
    }
  }

  Cooperatives.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: uuidv4,
      allowNull: false,
      primaryKey: true
    },
    cooperative_name: DataTypes.STRING,
    cooperative_address: DataTypes.STRING,
    cooperative_email: DataTypes.STRING,
    cooperative_phone: DataTypes.STRING,
    creation_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Cooperatives',
  });

  return Cooperatives;
};
