const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const app = express()
const PORT = 7777

app.use(morgan('tiny'))
app.use(bodyParser.json())

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

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})