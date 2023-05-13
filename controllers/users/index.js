const router = require('express').Router();
const { User, Post } = require('../../models');

// Localhost:3001/users
router.get('/', async (req, res) => {
    const userData = await User.findAll({
        attributes: ['username']
    });
    res.json(userData);
});

// Create a new user
// localhost:3001/users/sign-up
router.post('/sign-up', async (req, res) => {
    const { username, password } = req.body;
    const userData = await User.create({
        username: username,
        password: password,
    });
    res.json(userData);
});

// Login - THIS CODE IS CURRENTLY BROKEN. ROUTE DOES NOT WORK. WILL COME BACK TO THIS.
// localhost:3001/users/login
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


// Logout

module.exports = router;