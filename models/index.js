const User = require('./User');
const Recipe = require('./Recipe');

User.hasMany(Recipe, {
  foreignKey: 'recipe_id',
  onDelete: 'CASCADE'
});

Recipe.belongsToMany(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

module.exports = { User, Recipe };
