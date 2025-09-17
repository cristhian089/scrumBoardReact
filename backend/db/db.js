const mongoose = require("mongoose");

const dbConnection = async () => {

    try {
        await mongoose.connect(process.env.DB_CONNECTION);
        console.log("Connection with MongoDB ON");
    } catch (e) {
        console.log("Error connecting to MongoDB: ", e);
        throw new Error("Error connectiong to MongoDB");
    }
};

module.exports = { dbConnection };