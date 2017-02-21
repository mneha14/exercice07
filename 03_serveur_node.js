var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<h1>yeoboseyo</h1>");
  response.write("<p>Point, aim, shoot!</p>");
  response.end();
}).listen(8888);