const TransactionController = require('../controllers/transaction.controllers')
const { authenthication } = require('../middleware/authenthication.middleware')
const errorHandler = require('../middleware/error-handler.middleware')

const router = require('express').Router()

router.post('/', authenthication, TransactionController.create)
router.get('/', authenthication, TransactionController.getAll)
router.use(errorHandler)
module.exports = router
