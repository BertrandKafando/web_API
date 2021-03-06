'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here n-n
      Tag.belongsToMany(models.Article, {through: 'ArticleTags'})
    }
  };
  Tag.init({
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
  }, {
    sequelize: sequelize,
    modelName: 'Tag',
  });
  return Tag;
};