const express = require('express');
const router = express.Router();
const controller = require('../controllers/maesquecodamController')
// const maeRouter = require('./comentarioRoute')

router.get('/', controller.getAll)
router.get('/:id', controller.get)
router.post('/', controller.create)
router.put('/:id', controller.update)
router.delete('/:id', controller.remove)

module.exports = router;