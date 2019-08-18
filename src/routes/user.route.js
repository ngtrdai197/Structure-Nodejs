const router = require('express').Router();
const userController = require('../controllers/user.controller');
const middleware = require('../middleware/jwt-parser');
const constants = require('../config/constants');

router.get('/', middleware.parser([constants.ROLES.ADMIN, constants.ROLES.USER]), userController.findAll);
router.get('/query/', userController.findByUsername);
router.put('/update/', userController.update);
router.get('/:userId', userController.findById);

module.exports = router;