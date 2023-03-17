const expressFunction = require('express');
const expressObj = expressFunction();
expressObj.get('/', function(req, res) {
        res.send('Hello World! V.10');
});
expressObj.listen(3000, function() {
        console.log('Listening on port 3000');
});