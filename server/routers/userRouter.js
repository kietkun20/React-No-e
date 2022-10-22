const express = require('express')
const router = express.Router()
const user = require("../controllers/user")

router.route('/').get(user.getAllUser)

module.exports = router;