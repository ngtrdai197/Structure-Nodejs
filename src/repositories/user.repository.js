const userModel = require('../models/user.model');

exports.create = async (user) => {
    return await userModel.create(user);
};

exports.findOne = async (query) => {
    return await userModel.findOne(query);
};

exports.findById = async (id) => {
    return await userModel.findById(id);
};

exports.findAll = async () => {
    return await userModel.find();
};

exports.update = async (user) => {
    return await userModel.findByIdAndUpdate(user.id, user);
};