const mongoose = require('mongoose');

const connectDb = async () => {
    await mongoose.connect('mongodb://localhost:27017/demo1');
    console.log("Database Connection Successful");
}

module.exports = { connectDb }