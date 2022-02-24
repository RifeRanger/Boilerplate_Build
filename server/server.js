const express = require('express')
const path = require('path')

const app = express()

const morgan = require('morgan');
app.use(morgan('dev'));


const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../public')))

app.use('/api', require('./api'))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

const port = process.env.PORT || 1337
app.listen(port, () => console.log('Sending and Receving on port ${port}'))

app.use(function (err, req, res, next) {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
  })

module.exports = app