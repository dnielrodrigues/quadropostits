var http = require("http");

http.createServer(function(request, response) {

  	// cabecalho
  	response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});

  	// testa url
  	console.log(request.url);

  	// carrega rotas
  	var FrontController = require("./controllers/FrontController");
  	FrontController.executar(request,response);

  	// finaliza aplicação
  	response.end(' <br>fim', 'UTF-8');

}).listen(3000);
console.log('Disponível no browser em http://localhost:3000/');