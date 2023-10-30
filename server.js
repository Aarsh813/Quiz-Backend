const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const {quizCreateRouter} = require("./middleware/Quiz/quizCreate");
const {quizUpdateRouter} = require("./middleware/Quiz/quizUpdate");
const {quizDeleteRouter} = require("./middleware/Quiz/quizDelete");
const {quizGetRouter} = require("./middleware/Quiz/quizGet");

const DB = 'mongodb+srv://Aarsh:Aarsh"12"@cluster0.91ortpx.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());

app.use(quizCreateRouter);
app.use(quizUpdateRouter);
app.use(quizDeleteRouter);
app.use(quizGetRouter);

//connect
mongoose
    .connect(DB)
    .then(() => {
        console.log('Connected to Database Successfully');
    })
    .catch((e) => {
        console.log(e.message);
    });
app.listen(PORT, () => {
    console.log("Connected to port " + PORT);
})





