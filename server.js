const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');

const port = 8080;
let app = express();

//Requirements to use body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
const coursesRoute = require('./routes/courses.js');
const categoriesRoute = require('./routes/categories.js');
app.use('/courses', coursesRoute);
app.use('/categories', categoriesRoute);

//Server launch
app.listen(port, () =>  {
    console.log('[ ok ] server started on port ' + port);
})

//DB Connection
mongoose.connect(process.env.DB_CONNECTION, {useUnifiedTopology: true}, () => {
    console.log('[ ok ] connected to database');
});

mongoose.connection.on('error', err => {
    console.log(err);
});