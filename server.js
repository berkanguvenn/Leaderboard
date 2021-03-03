const express = require('express');
const app = express();
const port = 4300;

const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./app/routes')(app);

app.listen(port, () => {
    console.log('Backend NodeJS live on ' + port);
});

