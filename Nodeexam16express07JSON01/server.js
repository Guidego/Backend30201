const expressFunct = require('express');
const expressObj = expressFunct();
const bodyParser = require('body-parser')
expressObj.use(bodyParser.json())
expressObj.use(bodyParser.urlencoded({ extended: true }))
const books = require('./data/db')
// root just for test
expressObj.get('/api', (req, res) => {
 res.send('Hello World! V.16')
})
// 1. GET data and show all
expressObj.get('/api/getbooks', (req, res) => {
    res.json(books)
   })
   // 2. GET specific data ระบุเล่ม
   expressObj.get('/api/getbooks/:id', function(req, res) {
    res.json(books.find(books => books.id === req.params.id))
   });
// Wait on PORT 3000
const port = process.env.PORT || 3000;
expressObj.listen(port, function() {
 console.log('Listening on port: ', port);
});