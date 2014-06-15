var lib = {
	
	testarModulo : function(caminho) {
		var testeModulo = false;
	  	fs.existsSync( caminho , function (existe) {
	  		testeModulo = existe;
		});
		return testeModulo;
	},

	ucfirst : function (texto){
	 	var texto = texto[0].toUpperCase() + texto.substr(1, texto.length);
	  	return texto;
	}

}

module.exports = lib;