const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const { userRouter } = require('./controller/user.controller')

const app = express()

app.use(cors({
    origin: "http://127.0.0.1:5173",//поменять локалхост!
    credentials: true
}));

app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user', userRouter)
app.use('/api', apiRouter)

app.use((err, req, res, next) => { res.send(err.message) })

module.exports = app