const express = require('express');
const router = express.Router();

/* == CTRLS == */
const ctrls = require('../controllers');

/* http://localhost:3003/users */

router.post('/signup', ctrls.users.signup);
router.post('/login', ctrls.users.login);
router.delete('/logout', ctrls.users.logout);


module.exports = router;
