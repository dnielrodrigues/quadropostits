var FrontController = {
  	executar: function(request,response){

  		//Vars
  		var lib = require('../lib');
	    var url = request.url;
	    var msgErro = "";

	    //ROTAS---------------------------------------------------------------//

	    //INICIO
	    if (url == "/") {

	    	//Carrega Listagem de Postits
	    	var model = require("../models/PostitModel");
	      	var controller = require("./PostitController");
	      	controller.listar(request,response);
	      	response.write(request.url);

	    //AÇÕES
	    } else {

	    	//Modelo e Ação
	      	var urlSeparada = url.split('/');
	      	var modelo = lib.ucfirst(urlSeparada[1]);
			var modulo = './controllers/' + modelo + 'Controller.js';
			var acao = urlSeparada[2];

			//Testa se o recurso existe OU pagina 404
			if (lib.testarModulo(modulo) == true) {
				response.write('modulo existe');
	      		var controller = require('./' + modelo + 'Controller.js');
	      		//ACAO
	      		controller.executar(modelo,acao);
			}else{
				//PAGINA 404 (incompleto)
			}

		}
		//fim - ROTAS---------------------------------------------------------------//
	}
}

module.exports = FrontController;