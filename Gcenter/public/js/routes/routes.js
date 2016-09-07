angular.module('gCenter').config(['$routeProvider',function ($routeProvider) {
  $routeProvider.when('/produtos', {
    templateUrl: 'partials/produtos.html',
    controller: 'ProdutosController'
  });

  $routeProvider.when('/produtos/new', {
    templateUrl: 'partials/produto.html',
    controller: 'ProdutoController'
  });


  $routeProvider.when('/produtos/edit/:produtoId', {
    templateUrl: 'partials/produto.html',
    controller: 'ProdutoController'
  });

  $routeProvider.otherwise({ redirectTo: '/produtos' });

}]);

