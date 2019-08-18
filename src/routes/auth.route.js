const router = require('express').Router();
const authController = require('../controllers/auth.controller');

router.post('/login', authController.signIn);
router.post('/create', authController.create);

module.exports = router;