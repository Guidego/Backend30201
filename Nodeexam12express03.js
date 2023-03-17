//1 เอา expresss เข้ามา
const expressFunct = require('express');
const expressObj = expressFunct();
// array ของ object ในที่นี้มีสอง objects
const universities = [
                        {id:1, name:'KMUTNB'},
                        {id:2, name:'KU'}
                     ];

 //2 ช่องทางส่งผ่าน routing , Web API or routhing or  Endpoint ภาษาไทนคือเส้นทางเดิน                  
expressObj.get('/api/universities', function(req, res) {
    res.send(universities);
});
expressObj.get('/api/universities/:id', function(req, res) {
    const id = req.params.id;
    if (id == 1) {
       res.send(universities[0]);
    } else if (id == 2) {
       res.send(universities[1]);
    }  else {
       res.send('Error 404 not found!');
    }
}
);
const port = process.env.PORT || 3000;
expressObj.listen(port, function() {
    console.log(`Listening on port: `, port);
});