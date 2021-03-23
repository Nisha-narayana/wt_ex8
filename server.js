var module = require('./dbmodule');
var url = require('url');
var querystring1 = require('querystring');
var http = require('http');


http.createServer(function(request, response) {
var data1 = '';
if (request.url === '/favicon.ico') {
response.writeHead(200, { 'Content-Type': 'image/x-icon' });
response.end();
} 
else
 {
request.on('data', function(chunk) {
            data1 += chunk;
        });

request.on('end', function() {
var name = querystring1.parse(data1)["name"];
console.log(name);
var email = querystring1.parse(data1)["email"];
console.log(email);
var gender = querystring1.parse(data1)["gender"];
console.log(gender);
var address = querystring1.parse(data1)["address"];
console.log(address);
if (request.url === '/save') {
module.saveUser(name, email,gender,address, response);
            } 
else if (request.url === '/update') {
module.updateUser(name, email,gender,address,response);
}
else if (request.url === '/delete') {
module.deleteUser(name, email,gender,address,response);
}
else {
console.log("invalid url");
            }
            //console.log(name+" "+email);
            //module.authenticateUser(name,email,response); 
            //module.saveUser(name,email);
        });
    }
}).listen(3000);
console.log("Server started");

