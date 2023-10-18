const express = require('express');
const routes = require('./routes');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use(routes);// is passing two parameters '/', routes


app.listen(PORT, () => console.log(`Server started at localhost:${PORT}`));