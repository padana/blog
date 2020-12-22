const express = require('express')
const router = express.Router()
const IndexControllers = require('../controllers/index')

router.get('/', IndexControllers.getIndex)
router.get('/readMore/:id', IndexControllers.getReadMore)
router.get('/delete/:id', IndexControllers.getDelete)
router.get('/update/:id', IndexControllers.getUpdate)
router.post('/update/:id', IndexControllers.postUpdate)






module.exports = router