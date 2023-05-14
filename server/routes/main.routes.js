const router = require('express').Router()
const adminRouter = require('./admin.routes')

router.use('/admins', adminRouter)

module.exports = router
