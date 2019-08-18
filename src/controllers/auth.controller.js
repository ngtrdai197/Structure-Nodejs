
const userRepository = require('../repositories/user.repository');
const jwt = require('jsonwebtoken');
const constants = require('../config/constants');

exports.signIn = async (req, res) => {
    try {
        const { body } = req;
        const user = await userRepository.findOne({ username: body.username });
        if (user) {
            if (user.password === body.password) {
                const token = await jwt.sign({
                    id: user._id, username: user.username
                }, constants.SECRECT_KEY, { expiresIn: '1h' });
                return res.status(200).send({ token });
            }
        }
    } catch (error) {
        return res.status(500).send({ statusCode: 500, message: error.message });
    }
}

exports.create = async (req, res) => {
    try {
        const { body } = req;
        const query = { username: body.username };
        const checkUser = await userRepository.findOne(query);
        if (!checkUser) {
            const user = await userRepository.create(body);
            return res.status(200).send(user);
        }
        return res.status(400).send({ statusCode: 400, message: 'User already exist' });
    } catch (error) {
        return res.status(500).send({ statusCode: 500, message: error.message });
    }
}
