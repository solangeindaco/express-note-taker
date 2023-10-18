const router = require('express').Router();
const apiRoutes = require('./apiRoutes');

// we are going to forward any request that has /api at the front of it
// to the routes declared in apiRoutes
router.use('/api', apiRoutes);

module.exports = router;