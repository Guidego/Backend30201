const expressFunct = require('express');
const expressObj = expressFunct();
expressObj.use(expressFunct.json());
const universities = [
                        {id:1, name:'KMUTNB'},
                        {id:2, name:'KU'},
                        {id:3, name:'CU'},
                     ]
expressObj.get('/api/universities', function(req, res) {
    res.send(universities);
});
expressObj.post('/api/add', function(req, res) {
    const uniname = req.body.name;
    if (uniname.length <= 1) {
        res.status(400).send('Error can not add  university!');
    } else {
        const uni = {
                        id: universities.length + 1, 
                        name: uniname
                    }
        universities.push(uni);
        res.send(uni);
    }
});
const port = process.env.PORT || 3000;
expressObj.listen(port, function() {
    console.log(`Listening on port: `, port);
});