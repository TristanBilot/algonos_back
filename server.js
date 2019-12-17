const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');

const port = 8080;
let app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
const coursesRoute = require('./routes/courses.js');
app.use('/courses', coursesRoute);

//Server launch
app.listen(port, () =>  {
    console.log('server started');
})

//DB Connection
mongoose.connect(process.env.DB_CONNECTION, {useUnifiedTopology: true}, () => {
    console.log('connected to MongoDB !');
});
