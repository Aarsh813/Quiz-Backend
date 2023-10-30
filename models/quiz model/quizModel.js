const mongoose = require("mongoose");

const quizSchema = mongoose.Schema({
    question: {
        required: true,
        type: String,
        trim: true,
    },
    option1: {
        required: true,
        type: Map,
    },
    option2: {
        required: true,
        type: Map,
    },
    option3: {
        required: true,
        type: Map,
    },
    option4: {
        required: true,
        type: Map,
    },
});

const Quiz = mongoose.model("Quiz", quizSchema);
module.exports = Quiz;