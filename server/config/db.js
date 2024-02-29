const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const connected_DB = await mongoose.connect('mongodb://127.0.0.1:27017/form', {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useCreateIndex: true, // To avoid deprecation warnings
            // useFindAndModify: false // To avoid deprecation warnings
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log("❌DB❌", error.message);
    }
};

module.exports = connectDB;
