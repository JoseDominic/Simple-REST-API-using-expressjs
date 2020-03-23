const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    rollno:{
        type:Number,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    class:{
        type:Number,
        required:true
    }
});

const Student = mongoose.model('Student',StudentSchema);
module.exports = Student;