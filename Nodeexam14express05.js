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
expressObj.put('/api/update/:id', function(req, res) {
    const id = req.params.id;
    const uniname = req.body.name;
    if (uniname.length <= 3 || isNaN(id)) {
        res.status(400).send('Error can not add university!');
    } else {
        const uni = universities.find(i => i.id === parseInt(id));
        if (uni) {
            uni.name = uniname; 
            res.send(universities);
        } else {
            res.status(400).send('Error can not find university to update!');
     }         
    }
});
const port = process.env.PORT || 3000;
expressObj.listen(port, function() {
    console.log(`Listening on port: `, port);
});
