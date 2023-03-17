const express = require('express');
const appObj = express();
const port = 3000;

appObj.get('/', (req, res) => {
    res.send('Hello World! V.11');
});
appObj.get('/login', function(req, res) {
    res.send('Login page');
});
appObj.get('/about', (req, res) => {
    res.send('About page');
});

appObj.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});