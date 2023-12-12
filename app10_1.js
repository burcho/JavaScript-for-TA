
const http = require("http");
const { dirname, basename } = require("path");
const { type, userInfo, uptime } = require("os");
http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write(`System information\n`);
    response.write(`Current user name: ${userInfo().username}\n`);
    response.write(`OS type: ${type}\n`);
    response.write(`System work time: ${(uptime() / 60).toFixed(2)} minutes\n`);
    response.write(`Current work directory: ${dirname(__dirname)}\n`);
    response.write(`Server file name: ${basename(__filename)}\n`);
    response.end('\n');
}).listen(5000);


