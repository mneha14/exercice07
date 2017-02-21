var fs = require("fs");//importation du module gestion de fichier

var data = fs.readFileSync('04_fichier.txt');

console.log(data.toString());
console.log("Program Ended");