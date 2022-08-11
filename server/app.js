const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan')

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '../public')));


//can we use ./public here instead of the actual html file?
app.get('*', (req, res, next) => {

    res.sendFile(path.join(__dirname, '../public/index.html'))
});

app.use((req, res, next) => {
    console.log(err);
    console.log(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal Server Error')
});

module.exports = app;