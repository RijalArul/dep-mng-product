const router = require('express').Router()
const adminRouter = require('./admin.routes')
const categoryRouter = require('./category.routes')
const productRouter = require('./product.routes')
const transactionRouter = require('./transaction.routes')

router.use('/admins', adminRouter)
router.use('/categories', categoryRouter)
router.use('/products', productRouter)
router.use('/transactions', transactionRouter)
module.exports = router
