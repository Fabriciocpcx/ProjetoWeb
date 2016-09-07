angular.module('gCenter')
  .controller('ProdutosController',
    ['$scope', '$http', function ($scope, $http) {
      $scope.produtos = [];
      $scope.filtro = '';
      $scope.mensagem = '';

      $http.get('api/produtos')
        .success(function (data) {
          $scope.produtos = data;
        })
        .error(function (statusText) {
          console.log(statusText);
        });

      $scope.remover = remover;
      function remover (produto) {
        $http.delete('api/produtos/' + id)
          .success(function () {
            console.log('usuario deletado com sucesso');

            var indice = $scope.produtos.indexOf(produto);
            $scope.produtos.splice(indice, 1);
            $scope.mensagem = produto.titulo + ' Removido com sucesso';
          }
        )
          .error(function (statusText) {
            console.log('Error ' + e);
            $scope.mensagem = 'Erro' + e;
          });
      }
    }
    ]);
