const mongoose = require('mongoose');
const config = require('config');
const db = config.get('MONGO_URI');

const connnectDB = async () => {
    try {
        await mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });

        console.log('Mongo DB connected');
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};

module.exports = connnectDB;
