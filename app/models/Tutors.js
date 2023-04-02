'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tutors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tutors.init({
    name:{
      type:DataTypes.STRING,
      allowNull: false
    },
    phone:{
      type:DataTypes.STRING,
      allowNull: false
    },
    city:{
      type:DataTypes.STRING,
      allowNull: false
    },
    email:{
      type:DataTypes.STRING,
      allowNull: false
    },
    about: {
      type:DataTypes.STRING,
      allowNull: false
    },
    img: {
      type:DataTypes.STRING,
      allowNull: false
    },
    password: {
      type:DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'tutors',
  });
  return tutors;
};