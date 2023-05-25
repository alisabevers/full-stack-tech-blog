const router = require('express').Router();
const { User, Post } = require('../../models');

// localhost:3001/
router.get('/', (req, res) => {
    res.render('homepage', {logged_in: req.session.logged_in});
})

// localhost:3001/login
router.get('/login', (req, res) => {
    res.render('login', {logged_in: req.session.logged_in});
})

// localhost:3001/sign-up
router.get('/sign-up', (req, res) => {
    res.render('sign-up', {logged_in: req.session.logged_in});
})

// localhost:3001/dashboard
router.get('/dashboard', async (req, res) => {
    try {
        const userBlogsData = await Post.findAll({
            where: {
                user_id: 3
            },
            include: [
                {
                    model: User
                }
            ]
        });
        const posts = userBlogsData.map(post => post.get({ plain: true }));
        res.render('dashboard', {posts, logged_in: req.session.logged_in});

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

// localhost:3001/make-post
router.get('/make-post', (req, res) => {
    res.render('make-post', {logged_in: req.session.logged_in});
})

module.exports = router;