angular.module('gCenter')
  .controller('ProdutoController', ['$scope', '$http', '$routeParams',
    function ($scope, $http, $routeParams) {
      $scope.produto = {};
      $scope.mensagem = '';

      if ($routeParams.produtoId) {
        $http.get('api/produtos/' + $routeParams.id)
          .success(function (produto) {
            $scope.produto = produto;
          })
          .error(function (erro) {
            console.log(erro);
            $scope.mensagem = 'Não foi possível obter o Produto';
          });
      }
      $scope.submeter = submeter;
      function submeter () {
        if ($scope.formulario.$valid) {
          if ($routeParams.produtoId) {
            $http.put('/api/produtos/' + $scope.produto._id, $scope.produto)
              .success(
                function () {
                  $scope.mensagem = 'Produto alterada com sucesso';
                })
              .error(function (erro) {
                console.log(erro);
                $scope.mensagem = 'Não foi possível obter o Produto';

              });
          } else {
            $http.post('/api/produtos', $scope.produto)
              .success(function () {
                $scope.produto = {};
                $scope.mensagem = 'Produto cadastrado com sucesso';
              }).error(function (erro) {
              console.log(erro);
              $scope.mensagem = 'Não foi possível cadastrar o produto';
            });
          }
        }
      }

    }]);
