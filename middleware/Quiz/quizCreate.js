const express = require('express');
const Quiz = require('../../models/quiz model/quizModel');
const quizCreateRouter = express.Router();

quizCreateRouter.post("/api/add_question", async (req, res) => {

    console.log("Result", req.body);

    let data = Quiz(req.body);

    try{
        let dataToStore = await data.save();
        res.status(200).json({'status' : "Saved"});
    }catch(error){
        res.status(400).json({'status' : error.message});

    }
})

module.exports = {quizCreateRouter}