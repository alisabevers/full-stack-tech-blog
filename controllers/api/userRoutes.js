const router = require('express').Router();
const { User } = require('../../models');

// localhost:3001/api/users
router.get('/', async (req, res) => {
    const userData = await User.findAll({
        attributes: ['username']
    });
    res.json(userData);
});


// Creates a new user
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
    console.log('testing message');
    try {
        const dbUserData = await User.findOne({
            where: {
                username: req.body.username,
            },
        });

        console.log(dbUserData);
        
        if (!dbUserData) {
            res.status(400).json({
                message: 'Invalid username, please try again!'
            });
            return;
        }

        const validPassword = await dbUserData.checkPassword(req.body.password);

        if(!validPassword) {
            res.status(400).json({
                message: 'Invalid password, please try again!'
            });
            return;
        }

        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.logged_in = true;

            res.status(200).json({
                user: dbUserData, message: 'You are now logged in!'
            });
        })

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