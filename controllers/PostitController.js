var PostitController = {

  executar: function(modelo, acao){
    console.log('Executando ' + acao + ' ' + modelo);
    //INCOMPLETO.........
  },

  listar: function(request,response){

    fs = require('fs');
    fs.readFile('index.html', function(error, data){
        response.writeHeader(200, {'Content-Type': 'text/html'});
        response.end('puta que pariu');
        console.log(data);
    });

    response.write('porra CARALHO, FUNCIONA MERDA');

  },

  inserir: function(){},
  editar: function(){},
  excluir: function(){}

}

module.exports = PostitController;