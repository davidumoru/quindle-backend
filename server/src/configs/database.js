const mongoose = require('mongoose');
const glowr = require('glowr')

const connectDB = async (mongo_url) => {
    try {
        const conn = await mongoose.connect(mongo_url);
        console.log(glowr(`MongoDB Connected: ${conn.connection.host}`, `bg.magenta`,));
    }
    catch (error) {
        console.error(glowr(error, "bg.red"));
        process.exit(1);
    }
}

module.exports = connectDB;