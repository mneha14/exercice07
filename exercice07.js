var http = require("http");
var fs = require("fs");//importation du module gestion de fichier
var tableauProvince = "";

fs.readFile('province.json', 'utf8', function (err, data) {
	    if (err) throw err; // we'll not consider error handling for now
	    var obj = JSON.parse(data);
	    


		function affiche_objet(monObjet){
			for (propriete in monObjet){

				tableauProvince += ("<td>"+ propriete + '-' + monObjet[propriete] + "</td>");
		
			}
			return tableauProvince;
		}

		affiche_objet(obj);

	});

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<h1>provinces</h1>");
  response.write("<p>Point, aim, shoot!</p>");
  response.write("<table><tr>" + tableauProvince + "</tr></table>");
  response.end();
}).listen(3000);


console.log("Program Ended");

