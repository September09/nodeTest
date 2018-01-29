var http = require('http');
var url = require("url");

function start(route) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Resuesr for " + pathname + " received");

        route(pathname);

        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();
    }

    http.createServer(onRequest).listen(3333);
    console.log("Server has started.");
    console.log( '__filename:'+ __filename );
    console.log( '__dirname:' + __dirname );
}

exports.start = start;