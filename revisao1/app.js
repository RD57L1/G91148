var saudacao = "hello world";
var nome = "Rodrigo";

console.log( `${saudacao} ${nome}` );

var soma = require("./soma");

console.log(soma(5, 10));

var http = require("http");

http.createServer().listen(8090);

console.log("Servidor funcionando porta: http://localhost:8090");