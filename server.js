const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 2077;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database is most def kicking it!")
})

const geckoRouter = require('./routes/gecko');
const speciesRouter = require('./routes/species');

app.use('/gecko', geckoRouter);
app.use('/species', speciesRouter);

app.listen(port, () => {
    console.log(`Server is doin its shit on port: ${port}`);
});