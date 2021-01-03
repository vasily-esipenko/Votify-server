const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
require('dotenv').config()

const quizRouter = require('./routes/quiz')
const pollRouter = require('./routes/poll')

const app = express()

mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to db')
});

app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(express.json())

app.use('/quiz', quizRouter)
app.use('/poll', pollRouter)

app.get('/', async (req, res) => {
    res.json({
        message: "Server is working"
    })
})

app.post('/create', async (req, res) => {
    
    res.json({
        message: "Your quiz was added to db",
        quiz: req.body
    })
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})
