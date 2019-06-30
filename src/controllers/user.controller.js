const userRepository = require('../repositories/user.repository');
const jwt = require('jsonwebtoken');
const constants = require('../config/constants');

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

exports.findAll = async (req, res) => {
    try {
        const users = await userRepository.findAll();
        return res.status(200).send(users);
    } catch (error) {
        return res.status(500).send({ statusCode: 500, message: error.message });
    }
}

exports.findByUsername = async (req, res) => {
    try {
        const checkUser = await userRepository.findOne(req.query);
        if (checkUser) {
            return res.status(200).send(checkUser);
        }
        return res.status(404).send({ statusCode: 404, message: `User not exist` });
    } catch (error) {
        return res.status(500).send({ statusCode: 500, message: error.message });
    }
}

exports.findById = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await userRepository.findById(userId);
        if (user) {
            return res.status(200).send(user);
        }
        return res.status(404).send({ statusCode: 404, message: `User not exist` });
    } catch (error) {
        return res.status(500).send({ statusCode: 500, message: error.message });
    }
}

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