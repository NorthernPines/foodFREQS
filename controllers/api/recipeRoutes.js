const router = require('express').Router();
const {Recipe} = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    console.log(req.body);
    const newRecipe = await Recipe.create({
      name: req.body.name,
      img_url: req.body.img_url,
      health_labels: req.body.health_labels,
      ingredient_lines: req.body.ingredient_lines,
      user_id: req.session.user_id
    });
    console.log("here");
    console.log(newRecipe);
    res.status(200).json(newRecipe);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const recipeData = await Recipe.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const recipe = recipeData.get({ plain: true });

    res.render('recipe', {
      recipe,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const recipeData = await Recipe.destroy({
      where: {
        recipeId: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!recipeData) {
      res.status(404).json({ message: 'No recipe found with this id!' });
      return;
    }

    res.status(200).json(recipeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;