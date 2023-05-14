const router = require('express').Router()
const adminRouter = require('./admin.routes')
const categoryRouter = require('./category.routes')
const productRouter = require('./product.routes')

router.use('/admins', adminRouter)
router.use('/categories', categoryRouter)
router.use('/products', productRouter)
module.exports = router
