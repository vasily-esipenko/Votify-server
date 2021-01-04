const mongoose = require('mongoose')

const optionSchema = new mongoose.Schema({
    option: {
        type: Object
    }
})

const quizSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    options: {
        type: Array,
        required: true
    },
    created: {
        type: String,
        required: true
    },
})

const Quiz = mongoose.model('Quiz', quizSchema)

module.exports = Quiz

