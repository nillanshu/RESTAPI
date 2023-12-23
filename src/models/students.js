const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: [true, "This Email already exists"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email");
            }
        }
    },
    phone: {
        type: Number,
        min: 10,
        unique: true
    },
    address: {
        type: String,
        required: true
    }
});



// creating new collection using model

const Student = new mongoose.model("Student", studentSchema);

module.exports = Student;