var http = require("http");
var url = require("url");

var ipAdress = '127.0.0.1';//'192.168.41.148';
var port = 8008;


function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Requête reçue pour le chemin " + pathname + ".");
    route(handle, pathname, response, request);
  }

  http.createServer(onRequest).listen(port, ipAdress);
  console.log("Démarrage du serveur.");
}

exports.start = start;