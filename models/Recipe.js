const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipe extends Model {}

Recipe.init(
  {

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // Label in response from edamam
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
    img_url: {
      type: DataTypes.STRING,
      allowNull: false
    },

    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },

    health_labels: {
      type: DataTypes.STRING,
      allowNull: false
    },

    ingredient_lines: {
      type: DataTypes.STRING,
      allowNull: false
    },

    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'recipe',
  }
);

module.exports = Recipe;
