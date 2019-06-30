const router = require('express').Router();
const controller = require('../controllers/user.controller');
const middleware = require('../middleware/jwt-parser');
const constants = require('../config/constants');

router.post('/', controller.create);
router.post('/auth/login', controller.signIn);
router.get('/', middleware.parser([constants.ROLES.ADMIN, constants.ROLES.USER]), controller.findAll);
router.get('/query/', controller.findByUsername);
router.get('/:userId', controller.findById);

module.exports = router;