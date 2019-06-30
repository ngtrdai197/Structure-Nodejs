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
});

module.exports = mongoose.model('product', productShema);