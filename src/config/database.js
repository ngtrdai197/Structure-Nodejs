const mongoose = require('mongoose');
module.exports.connection = async () => {
    mongoose.Promise = global.Promise;
    const baseUrl = `mongodb://localhost:27017/CRUD_Demo`;
    try {
        const connect = await mongoose.connect(baseUrl, { useNewUrlParser: true });
        if (connect) {
            console.log(`Database is connected successfully`);
        }
    } catch (error) {
        throw error;
    }
}