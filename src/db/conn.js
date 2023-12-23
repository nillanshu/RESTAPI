const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/studentsapi", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection successfull...");
}).catch((e) => {
    console.log(`Connection Failed! Error: ${e}`);
})