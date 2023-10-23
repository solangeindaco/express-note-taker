const express = require('express');
const routes = require('./routes');
const path = require('path');

const app = express();

//the server will listen on port 3001 if the PORT environment variable isn’t set this is for deployment in Heroku
let PORT = process.env.PORT;
if (PORT == null || PORT == "") {
  PORT = 3001;
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//This is a built-in middleware function in Express. It serves static files
//Sets file extension fallbacks: If a file is not found, search for files with the specified extensions and serve the first one found.
app.use(express.static('public',{extensions: ['html']}));

app.use(routes);// is passing two parameters '/', routes

app.listen(PORT, () => console.log(`Server started at localhost:${PORT}`));