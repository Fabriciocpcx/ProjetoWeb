angular.module('minhasDiretivas', [])
    .directive('meuPainel', function () {

        var directive = {};

        directive.retrict = 'EA';
        directive.transclude = true;

        directive.scope = {
            titulo: '@',
            mensagem: '@'
        };

        directive.templateUrl = 'js/directives/meu-painel.html';
        return directive;

    })
     .directive('minhaImagem', function() {

        var ddo = {};

        ddo.restrict = "AE";

        ddo.scope = {
            titulo: '@',
            url: '@'
        };

        ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">';           

        return ddo;
    }).directive('meuBotaoPerigo',function(){
        var ddo = {};

        ddo.restric = "E";

        ddo.scope={
            nome: '@',
            acao: '&'
        }
          ddo.template = '<button href="" class="btn btn-danger btn-block" ng-click="acao()">{{nome}}</button>';       

          return ddo;
    });