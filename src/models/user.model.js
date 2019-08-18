const mongoose = require('mongoose');

const userShema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
    }
}, {
        timestamps: true,
        toJSON: {
            virtuals: true,
            transform: (obj, ret) => { delete ret._id, delete ret.__v }
        }
    });

module.exports = mongoose.model('user', userShema);