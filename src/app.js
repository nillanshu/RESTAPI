const express = require('express');
const conn = require("./db/conn");
const Student = require("./models/students");
const studentRouter = require('./routers/student')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

//routing
// 1: create a new router
// const router = new express.Router();

// 2: define the router
// router.get("/User", (req, res) => {
//     res.send("Hello");
// });

// 3: register the router
// app.use(router);
app.use(studentRouter);

app.listen(port, () => {
    console.log(`Connection is set up at ${port}`);
});
