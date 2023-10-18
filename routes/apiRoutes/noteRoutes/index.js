const router = require('express').Router();

const notesController = require('../../../controllers')

router.get('/',notesController);

module.exports = router;