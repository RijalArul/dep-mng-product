const router = require('express').Router()
const ProductController = require('../controllers/product.controllers')
const { authenthication } = require('../middleware/authenthication.middleware')
const errorHandler = require('../middleware/error-handler.middleware')
const {
  uploadSingle,
  imagePostValidation,
  imagePutValidation
} = require('../middleware/upload-image')
const { productValidate } = require('../middleware/validate-input.middleware')

router.get('/', ProductController.getAll)
router.get('/:id', ProductController.get)
router.use(authenthication)
router.put('/:id/inactive', ProductController.delete)
router.use(uploadSingle)
router.post('/', imagePostValidation, productValidate, ProductController.create)
router.put(
  '/:id',
  imagePutValidation,
  productValidate,
  ProductController.update
)
router.use(errorHandler)

module.exports = router
