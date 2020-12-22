const express = require('express')
const router = express.Router()
const AdminControllers = require('../controllers/admin')

router.get('/admin', AdminControllers.getAdmin)
router.post('/blog', AdminControllers.postAdmin)



module.exports = router