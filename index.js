const express = require("express")
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json());

const db = require("./database/config")

db.sequelize.sync({force: true}).then(()=>{
    console.log("Drop and Resync")
})
require('./route/route')(app)

app.listen(8000, ()=>{
    console.log("server is running at port 8000")
})