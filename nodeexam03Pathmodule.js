//1
const http = require('http');
var path = require('path');
var os = require('os');


//2
const hostname = '127.0.0.1';
const port = 3000;

//3
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World  V.02');
  });

//4 งาน
var filename = path.basename('nodeexam03Pathmodule.js');
console.log('filename : ' + filename);
console.log('ext name : ' + path.extname(filename));
var myPlatform = os.platform();
console.log("Platform: " + os.platform());
console.log("Architecture: " + os.arch());

//5
server.listen(port, hostname, () => {
   console.log('Server running at http://%s:%s/',hostname, port);
});