const router = require('express').Router();
const { User, Post } = require('../../models');

// localhost:3001/api/users
router.get('/', async (req, res) => {
    const userData = await User.findAll({
        attributes: ['username']
    });
    res.json(userData);
});

// Create a new user
// localhost:3001/api/users/sign-up
router.post('/sign-up', async (req, res) => {
    console.log(req.body);
    try {
        const userData = await User.create(req.body);
    
        req.session.save(() => {
          req.session.user_id = userData.id;
          req.session.logged_in = true;
    
          res.status(200).json(userData);
        });
      } catch (err) {
        res.status(400).json(err);
      }
});


// localhost:3001/api/users/login
router.post('/login', async (req, res) => {
    try {
        const dbUserData = await User.findOne({
            where: {
                username: req.body.username,
            },
        });

        if (!dbUserData) {
            res.status(400).json({
                message: 'Invalid username, please try again.'
            });
            return;
        }

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Handles logging out
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

module.exports = router;