const { getGreeting } = require('./personalModule');
const http = require("http");
const { userInfo } = require("os");
http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    const currentDate = new Date();
    response.write(`Date of request: ${currentDate.toUTCString()}\n`);
    response.write(getGreeting(userInfo().username, currentDate));
    response.end('\n');
}).listen(5000);