angular.module('gCenter')
  .controller('GruposController', ['$scope', '$http', function ($scope, $http) {
    $scope.grupos = [];

    $http.get('/app/grupos')
      .success(function (grupos) {
        $scope.grupos = grupos;
      })
      .error(function (erro) {
        console.log(erro);
      });
  }]);
