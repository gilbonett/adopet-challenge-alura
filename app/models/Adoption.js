'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Adoption extends Model {
  
    static associate(models) {
      Adoption.belongsTo(models.User, { 
        foreignKey:'tutor_id'
      })
      Adoption.belongsTo(models.Pet, {
        foreignKey:'pet_id'
      })
    }
  }
  Adoption.init({
    UUID: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      unique: true
    },
    tutor_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {       
        model: 'User',
        key: 'id',
        role: 'tutor'
      }
    },
    pet_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Adoption',
    freezeTableName: true,
    timestamps: false,
    primaryKey: false
  });
  return Adoption;
};