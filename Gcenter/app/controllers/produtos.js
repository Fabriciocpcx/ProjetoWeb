module.exports = function (app) {
  var controller = {};
  var Produtos = app.models.produtos;

  /**
   * fucao que listas todos os produtos
   */
  controller.listaProdutos = function (req, res) {
    Produtos.find().exec()
      .then(
        function (produto) {
          res.json(produto);
        },
        function (erro) {
          console.error(erro);
          res.status(500).json(erro);
        }
    );

  };

  /**
   * funcao que lista o produto pelo id 
   */
  controller.listaProdutoId = function (req, res) {
    var _id = req.params.id;
    Produtos.findById(_id).exec()
      .then(function (produto) {
        if (!produto) throw new Error('Produto não encontrado');
        res.json(produto);
      },
        function (erro) {
          console.log(erro);
          res.status(404).json(erro);
        }
    );
  }


  controller.addProduto = function (req, res) {
    var produto = req.body;
    Produtos.create(produto,
      function (erro, produto) {
        if (erro) {
          console.log(erro);
          res.status(500).json(erro);
        }
        res.status(201).json(produto);
      });
  };

  controller.deleteProduto = function (req, res) {
    var query = {'_id': req.params.id};
    Produtos.remove(query, function (erro) {
      if (erro) {
        console.error(erro);
        res.status(500).json(erro);
      } else {
        res.status(204).end();

      }
    });
  };

  controller.updateProduto = function (req, res) {
    var id = req.params.id;
    Produtos.findByIdAndUpdate(id, req.body,
      function (erro, produto) {
        if (erro) {console.error(erro);
          res.status(500).json(erro);} else {
          res.json(produto);
        }
      });

  };


  controller.listaGrupos = function(req, res) {

    res.json([
        {
            _id: 1, 
            nome: 'cordas'
        }, 
        { 
            _id: 2, 
            nome: 'percussao', 
        }, 
        { 
            _id: 3, 
            nome: 'teclas'
        }, 
        { 
            _id: 4, 
            nome: 'sopros'
        }, 
        { 
            _id: 5, 
            nome: 'acessorios'
        }
    ]);
        
};

  return controller;
};