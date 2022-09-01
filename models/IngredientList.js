const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class IngredientList extends Model {}

IngredientList.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    recipe_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "recipe",
          key: "id"
        }
      },
    ingredient_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "product",
          key: "id"
        }
      },
})