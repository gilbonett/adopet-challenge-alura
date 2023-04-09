'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pet.hasOne(models.Adoption, {
        foreignKey:'pet_id'
      })
      Pet.belongsTo(models.Shelter,{
        foreignKey:'shelter_id'
      })
    }
  }
  Pet.init({
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
    adopted:{
      type:DataTypes.BOOLEAN,
      allowNull:false
    },
    location:{
      type:DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Pet',
    freezeTableName: true
  });
  return Pet;
};