const express = require('express');
const Quiz = require('../../models/quiz model/quizModel');

const quizUpdateRouter = express.Router();

quizUpdateRouter.put("/api/update_question/:id/:option", async (req, res) => { //patch method no need to give whole data only the field to change

    let id = req.params.id;
    let option = (req.params.option).toString() + ".count";
    let choice = req.body.choice;

    try {
        const data = await Quiz.findById(id);
        if (choice == "true") {
            const updateObject = {};
            updateObject[option] = 1;
            const dataUpdated = await Quiz.findOneAndUpdate({ _id: id }, { $inc: updateObject })
            res.status(200).json(dataUpdated);
        }
    } catch (error) {
        res.status(400).json({
            'status': error.message
        })
    }
})

module.exports = { quizUpdateRouter }