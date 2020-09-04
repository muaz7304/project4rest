const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

const routes = require('./src/routes/api');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/project2', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
     console.log('Mongoose is connected!!!');
});

// Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// app.use(cors())
// HTTP request logger
app.use(morgan('tiny'));
app.use('/api', routes);

// connect heroku
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('/build'))
}

app.listen(PORT, console.log(`Server is starting at ${PORT}`));