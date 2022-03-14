const express = require('express');

const apiRouter = require('./routes/apiRouter');
const htmlRouter = require('./routes/htmlRouter');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(express.static('public'));
app.use('/api', apiRouter);
app.use('/', htmlRouter);


app.listen(PORT, () => {
    console.log(`API server is ready on port ${PORT}!`);
});