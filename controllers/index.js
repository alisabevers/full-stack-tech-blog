const router = require('express').Router();

// Localhost:3001/
router.get('/', (req, res) => {
    res.json('hello');
})

module.exports = router;