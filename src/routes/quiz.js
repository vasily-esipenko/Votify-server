const express = require('express');
const router = express.Router();
const quiz = require('../models/Quiz')

router.get('/', async (req, res) => {
    await quiz.find().then(quizes => {
        res.json(quizes)
    })
})

router.post('/create', async (req, res) => {
    await quiz.create({
        question: req.body.question,
        options: req.body.options,
        created: new Date()
    }).then(quiz => {
        res.json(quiz)
    }).catch(error => {
        res.status(500)
        res.json(error)
    })
})

module.exports = router
