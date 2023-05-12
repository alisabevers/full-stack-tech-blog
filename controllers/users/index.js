const router = require('express').Router();
const { User } = require('../../models/Index');

// Localhost:3001/users
router.get('/', (req, res) => {
    res.json('i\'m working');
})

// Create a new user
// localhost:3001/users/sign-
router.post('/signup', async (req, res) => 
{
    const { username, password } = req.body;
    const userData = await User.create({
        username: username,
        password: password,
    })

    res.json(userData);
});


// Login


// Logout

module.exports = router;