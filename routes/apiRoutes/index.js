const router = require('express').Router();
const notesController = require('../../controllers');

router.use('/notes', notesController);

module.exports = router;