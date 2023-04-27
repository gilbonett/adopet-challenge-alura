'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
   
    static associate(models) {
      User.hasMany(models.Adoption, {
        foreignKey:'tutor_id'
      })
      User.hasMany(models.Pet, {
        foreignKey:'shelter_id'
      })
    }
  }
  User.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name:{
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        len:{
          args:[2,24],
          msg:"number of incorrect parameters"
        } 
      }
    },
    phone:{
      type:DataTypes.STRING,
      validate: {
        len: [2, 24]
      }
    },
    city:{
      type:DataTypes.STRING,
      validate: {
        len: [2, 24]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUnique: (value, next) => {
          User.findAll({
            where: { email: value },
            attributes: ['id'],
          })
            .then((user) => {
              if (user.length != 0)
                next(new Error('Email address already in use!'));
              next();
            })
            .catch((onError) => console.log(onError));
        },
        isEmail:{
          msg:"checks for email format (foo@bar.com)"
        },
      },
    },
    about: {
      type:DataTypes.STRING,
      validate: {
        len: [2, 100]
      }
    },
    img: {
      type:DataTypes.STRING,
      validate:{
        isUrl: true
      }
    }, 
    role: {
        type:DataTypes.ENUM('tutor', 'shelter'),
        defaultValue: 'tutor'
    },
    password: {
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        len:  [6,  100]
      }
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    paranoid: true,
    modelName: 'User',
    freezeTableName: true,
    timestamps: true
  });
  return User;
};
