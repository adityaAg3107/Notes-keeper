const mongoose = require("mongoose");


 const mongoURI = "mongodb://127.0.0.1:27017/EnviNote";

const connectToMongo = () => {
    mongoose.connect(mongoURI, {})
        .then(() => console.log(' DB CONNECTED'))
        .catch(err => console.log("DB CONNECTION ERR ", err))
}



module.exports = connectToMongo;