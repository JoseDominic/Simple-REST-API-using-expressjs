const express = require('express');
const router = express.Router();
const Student = require('../models/student');

//get all student details from DB
router.get('/fetch',(req,res) => {
    console.log(req);
    Student.find()
        .then( result => {
            res.json(result);
        })
        .catch( err => {
            console.log(err);
            res.status(400).send(err);
          
});
});

//add a student to DB
router.post('/add',(req,res) => {
    const {name,age,rollno,clss} = req.body;
    let student = new Student();
    student.name = name;
    student.age = age;
    student.rollno = rollno;
    student.class = clss;
    try{
    student.save()
        .then(result => res.send('Student added'))
        .catch(err => console.log(err));
    }
    catch(err){
        res.status(400).send(err);
    }    
});

module.exports = router;