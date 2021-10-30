'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Promo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Promo.init({
    promoImage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Promo',
  });
  let config = {
    timestamps: false,
    deletedAt: false,
    tableName: 'promo'
}
  return Promo;
};