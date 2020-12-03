const express = require('express');
const noteController = require('../controller/noteController');

const router = express.Router();

router.get('/:query', noteController.search);
router.get('/', noteController.getNotes);
router.post('/', noteController.addNote);
router.delete('/:id', noteController.removeNote);

module.exports = router;