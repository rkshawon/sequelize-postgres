const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json())
app.use('/api', routes);

app.listen(8000, ()=>{
    console.log("server running at port 8000")
})