const express = require('express')
const app = express()
const db = require("./configs/database") 
const bodyParser = require('body-parser')

db.connect()
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))  

const router = require("./routes/maesquecodamRoutes") 


app.use("/mae", router)

module.exports = app;



