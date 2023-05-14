const AdminController = require('../controllers/admin.controllers')
const { authenthication } = require('../middleware/authenthication.middleware')
const errorHandler = require('../middleware/error-handler.middleware')
const { adminValidate } = require('../middleware/validate-input.middleware')

const router = require('express').Router()

router.post('/', adminValidate, AdminController.create)
router.post('/login', AdminController.login)
router.put('/:id', authenthication, adminValidate, AdminController.update)
router.use(errorHandler)

module.exports = router
