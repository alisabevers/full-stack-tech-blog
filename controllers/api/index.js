const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');

// localhost:3001/api/users
router.use('/users', userRoutes);

// localhost:3001/api/psots
router.use('/posts', postRoutes);

// localhost:3001/api/dashboard
// router.use('/dashboard', dashboardRoutes);

// router.use('/comments', commentRoutes);

module.exports = router;
