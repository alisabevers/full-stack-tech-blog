const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('homepage', {logged_in: req.session.logged_in});
})

router.get('/login', (req, res) => {
    res.render('login', {logged_in: req.session.logged_in});
})

router.get('/sign-up', (req, res) => {
    res.render('sign-up', {logged_in: req.session.logged_in});
})

router.get('/dashboard', (req, res) => {
    res.render('dashboard', {logged_in: req.session.logged_in});
})

module.exports = router;