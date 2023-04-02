'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class messages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  messages.init({
    name: {
      type:DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type:DataTypes.STRING,
      allowNull: false
    },
    name_pet: {
      type:DataTypes.STRING,
      allowNull: false
    },
    message:{
      type:DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'messages',
  });
  return messages;
};