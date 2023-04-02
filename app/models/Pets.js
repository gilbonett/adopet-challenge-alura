'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pets.init({
    name: {
      type:DataTypes.STRING,
      allowNull: false
    },
    age: {
      type:DataTypes.STRING,
      allowNull: false
    },
    size: {
      type:DataTypes.STRING,
      allowNull: false
    },
    personality: {
      type:DataTypes.STRING,
      allowNull: false
    },
    location:{
      type:DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'pets',
  });
  return pets;
};