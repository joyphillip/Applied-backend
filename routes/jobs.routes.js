const express = require('express')
const router = express.Router()

const ctrls = require('../controllers')

router.get('/', ctrls.jobs.index)
router.post('/', ctrls.jobs.create)

module.exports = router