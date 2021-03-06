require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => {
    console.error(error);
});
db.once('open', () => {
    console.log('Connected to Database');
});

app.use(express.json());

const userRouter = require('./routes/user');
app.use('/user', userRouter);

const port = 5000;
app.listen(port, () => {
    console.log(`Server connected on port ${port}`);
});

// module.exports = app;