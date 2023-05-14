const TransactionController = require('../controllers/transaction.controllers')
const { authenthication } = require('../middleware/authenthication.middleware')

const router = require('express').Router()

router.post('/', authenthication, TransactionController.create)

module.exports = router
