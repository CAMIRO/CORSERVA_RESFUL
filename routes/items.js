const controller = require('../controllers/items')
const router = require('express').Router()

// CRUD Routes /items

router.get('/', controller.getItems)
router.get('/:itemId', controller.getItem)
router.post('/', controller.createItem)
router.put('/:itemId', controller.updateItem)
router.delete('/:itemId', controller.deleteItem)


module.exports = router;