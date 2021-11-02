// Importing libraries
const express = require('express');


//IMPORTS
const fileRouter = require('./routes/file.route');
const stateRouter = require("./routes/states.route");

//Initializing app
const app = express();

// ROUTES
app.use('/', fileRouter);
app.use('/', stateRouter);

//defining PORT
const PORT = 5000;

//Making app listen to PORT
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
})