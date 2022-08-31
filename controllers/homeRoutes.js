const router = require('express').Router();
const { Recipe, User } = require('../models');
const withAuth = require('../utils/auth');

<<<<<<< HEAD
//dont need most of this
router.get('/', async (req, res) => {
  try {
    res.render('homepage', { 
      recipes, 
=======
router.get('/', async (req, res) => {
  try {
    res.render('homepage', { 
>>>>>>> d3e0370f3133df6b7ce3512c4e5f3bd3f9b1177b
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/:profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.params.profile, {
      attributes: { exclude: ['password'] },
      include: [{ model: Recipe }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

router.get('/search', (req, res) => {
  res.render('search');
})

module.exports = router;
