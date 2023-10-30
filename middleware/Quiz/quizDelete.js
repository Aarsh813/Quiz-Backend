const express = require('express');
const Quiz = require('../../models/quiz model/quizModel');

const quizDeleteRouter = express.Router();

quizDeleteRouter.delete("/api/delete_question/:id",async (req,res)=>{

    let id = req.params.id;

    try {
        const data = await Quiz.findByIdAndDelete(id);
        res.status(200).json({'status' : "Deleted"});
    } catch (error) {
        res.status(400).json({'status' : error.message})
    }
})

module.exports = { quizDeleteRouter }