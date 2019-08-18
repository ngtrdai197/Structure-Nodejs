const mongoose = require('mongoose');

const productShema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    priceOfProduct: {
        type: Number,
        required: true
    }
}, {
        timestamps: true,
        toJSON: {
            virtuals: true,
            transform: (obj, ret) => { delete ret._id, delete ret.__v }
        }
    });

module.exports = mongoose.model('product', productShema);