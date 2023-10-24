const router = require('express').Router();
const notesController = require('../../controllers');

/* Forward any request that has /api/notes at the front of it
   to the routes declared in notesController */
router.use('/notes', notesController);

module.exports = router;