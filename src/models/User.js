'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        isAlphanumeric: {
          args: true,
          msg: 'Name must be alphabetical'
        },
        notEmpty: {
          args: true,
          msg: 'Name is required'
        },
        len: {
          args: [2, 30],
          msg: 'Name must be between 2 and 30 characters'
        }
      }
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [6, 255],
          msg: 'Password must be between 6 and 30 characters'
        }
      }
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Email must be a valid email'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};