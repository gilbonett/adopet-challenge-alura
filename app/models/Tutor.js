'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tutor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tutor.hasMany(models.Adoption, {
        foreignKey:'tutor_id'
      })
    }
  }
  Tutor.init({
    name:{
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
    phone:{
      type:DataTypes.STRING,
      allowNull: false,
    },
    city:{
      type:DataTypes.STRING,
      allowNull: false
    },
    email:{
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        isEmail: {
          msg:  "checks for email format (foo@bar.com)"
        } 
      }
    },
    about: {
      type:DataTypes.STRING,
      allowNull: false
    },
    img: {
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        isUrl: true
      }
    },
    password: {
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        len:  [6,  16]
      }
    }
  }, {
    sequelize,
    modelName: 'Tutor',
    freezeTableName: true  //Revisar... para fixar o nome da tabela 
  });
  return Tutor;
};