'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class result extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  result.init({
    uid: DataTypes.STRING,
    courseName: DataTypes.STRING,
    quiz1: DataTypes.FLOAT,
    midterm: DataTypes.FLOAT,
    quiz2: DataTypes.FLOAT,
    total: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'result',
  });
  return result;
};