const express = require('express');
const Quiz = require('../../models/quiz model/quizModel');

const quizGetRouter = express.Router();

quizGetRouter.get("/api/get_question",async (req, res) => {

    try {
        let data = await Quiz.find();
        res.status(200).json(data);
        
    } catch (error) {
        res.status(400).json({'status' : error.message})
    }
})
module.exports = { quizGetRouter }