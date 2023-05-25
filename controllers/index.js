const router = require('express').Router();
const api = require('./api');
const pages = require('./pages');

// localhost:3001/
router.use('/', pages);
router.use('/api', api);

module.exports = router;