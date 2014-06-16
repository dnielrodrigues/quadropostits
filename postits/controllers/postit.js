module.exports = function(app) {

  var Usuario = app.models.usuario;

  var PostitController = {

    criar: function(req, res) {
      var _id = req.session.usuario._id;
      Usuario.findById(_id, function(erro, usuario) {
        var postit = req.body.postit;
        usuario.postits.push(postit);
        usuario.save(function() {
          res.redirect('/postits');
        });
      });
    },

    editar: function(req, res) {
      var _id = req.session.usuario._id;
      Usuario.findById(_id, function(erro, usuario) {
        var postitID = req.params.id;
        var postit = usuario.postits.id(postitID);
        var resultado = {postit: postit};
        res.render('postits/edit', resultado);
      });
    },

    excluir: function(req, res) {
      var _id = req.session.usuario._id;
      Usuario.findById(_id, function(erro, usuario) {
        var postitID = req.params.id;
        usuario.postits.id(postitID).remove();
        usuario.save(function() {
          res.redirect('/postits');
        });
      });
    }
  }
  
  return PostitController;

};