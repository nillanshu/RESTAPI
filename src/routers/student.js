const express = require("express");
const Student = require("../models/students");
const router = new express.Router();


// // create a new student
// ///promises
// // app.post("/students", (req, res) => {
// //     // console.log(req.body);
// //     const user = new Student(req.body);

// //     user.save().then(() => {
// //         res.status(201).send(user);
// //     }).catch((e) => {
// //         res.status(400).send(e);
// //     });
// // });

// // async await
// app.post("/students", async(req, res) => {
//     // console.log(req.body);
//     try{
//         const user = new Student(req.body);

//         const createUser = await user.save();
//         res.status(201).send(createUser);
//     } catch(e) {
//         res.status(400).send(e);
//     }
// });




// // You dont need express.json() and express.urlencoded()
// // for get requests or delete requests. We only need 
// // it for post and put request.

// // express.json() is a method inbuilt in express to
// // recognize the incoming request obj as json obj. 
// // This method is called as a middleware in your 
// // application using code: app.use(express.json());

// // get the data of registered students
// app.get('/Students', async(req, res) => {
//     try {
//         const studentsData = await Student.find();
//         res.status(200).send(studentsData);
//     } catch(e) {
//         res.send(e);
//     }
// });

// // get data of individual student using id
// app.get('/Students/:id', async(req, res) => {
//     try {
//         const _id = req.params.id;
        
//         const studentData = await Student.findById(_id); 
        
//         if(!studentData) {
//             return res.status(404).send();
//         } else {
//             res.send(studentData);
//         }

//     } catch(e) {
//         res.status(500).send(e);
//     }
// });


// // update the student by id
// app.patch("/students/:id", async(req, res) => {
//     try{
//         const _id = req.params.id;
//         const updateStudent = await Student.findByIdAndUpdate(_id, req.body, {
//             new: true
//         });  //({_id: _id}, ) //object destructuring
//         res.send(updateStudent);
//     } catch(e) {
//         res.status(400).send(e);
//     }
// });


// // deleting students data

// app.delete("/students/:id", async (req, res) => {
//     try {
//         const _id = req.params.id;
//         const deleteStudent = await Student.findByIdAndDelete(_id);
//         if(!_id) {
//             return res.status(400).send();
//         }
//         res.status(200).send(deleteStudent);
//     } catch(e) {
//         res.status(500).send(e);
//     }
// });


// routing starting from here

// create a new student
router.post("/students", async(req, res) => {
    // console.log(req.body);
    try{
        const user = new Student(req.body);

        const createUser = await user.save();
        res.status(201).send(createUser);
    } catch(e) {
        res.status(400).send(e);
    }
});

router.get('/Students', async(req, res) => {
    try {
        const studentsData = await Student.find();
        res.status(200).send(studentsData);
    } catch(e) {
        res.send(e);
    }
});

// get data of individual student using id
router.get('/Students/:id', async(req, res) => {
    try {
        const _id = req.params.id;
        
        const studentData = await Student.findById(_id); 
        
        if(!studentData) {
            return res.status(404).send();
        } else {
            res.send(studentData);
        }

    } catch(e) {
        res.status(500).send(e);
    }
});


// update the student by id
router.patch("/students/:id", async(req, res) => {
    try{
        const _id = req.params.id;
        const updateStudent = await Student.findByIdAndUpdate(_id, req.body, {
            new: true
        });  //({_id: _id}, ) //object destructuring
        res.send(updateStudent);
    } catch(e) {
        res.status(400).send(e);
    }
});


// deleting students data

router.delete("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const deleteStudent = await Student.findByIdAndDelete(_id);
        if(!_id) {
            return res.status(400).send();
        }
        res.status(200).send(deleteStudent);
    } catch(e) {
        res.status(500).send(e);
    }
});




module.exports = router;