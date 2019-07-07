const constants = require('../config/constants');
const jwt = require('jsonwebtoken');

module.exports.parser = (roles) => {
    return async (req, res, next) => {
        const token = req.headers['x-access-token'];
        if (token) {
            jwt.verify(token, constants.SECRECT_KEY, async (error, decoded) => {
                if (error) {
                    return res.status(401).send({ statusCode: 401, message: 'Token invalid' });
                } else {
                    if (roles.indexOf(constants.ROLES.USER) > -1 || constants.USER_ADMIN.indexOf(decoded.username) > -1) {
                        req.user = decoded.id;
                        next();
                        return;
                    } else {
                        return res.status(403).send({ statusCode: 403, message: 'You have not permisstion' });
                    }
                }
            });
        } else {
            return res.status(401).send({ statusCode: 401, message: 'Not authorized' });
        }
    }
}