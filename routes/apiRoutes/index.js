const router = require('express').Router();
const noteRoutes = require('./noteRoutes');

// we are going to forward any request that has /notes at the front of it
// to the routes declared in noteRoutes
router.use('/notes', noteRoutes);

module.exports = router;