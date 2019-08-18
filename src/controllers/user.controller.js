const userRepository = require('../repositories/user.repository');

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

exports.update = async (req, res) => {
    try {
        const { body } = req;
        const updated = await userRepository.update(body);
        if (updated) {
            const user = await userRepository.findById(updated.id);
            return res.status(200).send(user);
        }
        return res.status(400).send({ statusCode: 400, message: `Update failed` });
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

