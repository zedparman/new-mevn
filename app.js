const express = require('express')
const app = express()
const port = 4000
const router = require('./routes/route');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/mevndbschool', {
    useNewUrlParser: true
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});

app.use(bodyParser.json())
app.use(cors())
app.use('/', router)

app.listen(port, () => console.log(`Example app listening on port port!`))



