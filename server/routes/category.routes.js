const CategoryController = require('../controllers/category.controllers')
const { authenthication } = require('../middleware/authenthication.middleware')
const errorHandler = require('../middleware/error-handler.middleware')
const { categoryValidate } = require('../middleware/validate-input.middleware')

const router = require('express').Router()

router.get('/', CategoryController.getAll)
router.get('/:id', CategoryController.get)
router.use(authenthication)
router.use(categoryValidate)
router.post('/', CategoryController.create)
router.put('/:id', CategoryController.update)
router.delete('/:id', CategoryController.delete)
router.use(errorHandler)
module.exports = router
