// /models/produtos.js
var mongoose = require('mongoose');

module.exports = function () {
  var schema = mongoose.Schema({
    nome: {
      type: String,
      require: true
    },
    categoria: {
      type: String,
      require: true 
    },
    valor:{
      type: String
    },
    url:{
      type: String
    }
  });

  return mongoose.model('produtos', schema);
};

