'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pet extends Model {
    static associate(models) {
      Pet.hasOne(models.Adoption, {
        foreignKey:'pet_id'
      })
      Pet.belongsTo(models.User,{
        foreignKey:'shelter_id'
      })
    }
  }
  Pet.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    shelter_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {      
        model: 'User',
        key: 'id',
        role: 'shelter'
      }
    },
    species: {
      type:DataTypes.ENUM('cat', 'dog'),
      allowNull: false,
      validate: {
        isIn: [['cat', 'dog']]
      }
  },
    name: {
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        isAlpha:{
          msg:"the name can only have letters"
        },
        len:{
          args:[2,24],
          msg:"number of incorrect parameters"
        } 
      }
    },
    age: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 5]
      }
    },
    size: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 8]
      }
    },
    personality: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 20]
      }
    },
    adopted:{
      type:DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    location:{
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 20]
      }
    },
    img:{
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true
      }
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Pet',
    freezeTableName: true,
    timestamps: true,
    scopes: {
      all: { where: {} }
    }
  });
  return Pet;
};