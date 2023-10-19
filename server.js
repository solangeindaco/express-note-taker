const express = require('express');
const routes = require('./routes');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use(routes);// is passing two parameters '/', routes

// This view route is a GET route for the feedback page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, './public/notes.html'))
);

app.listen(PORT, () => console.log(`Server started at localhost:${PORT}`));