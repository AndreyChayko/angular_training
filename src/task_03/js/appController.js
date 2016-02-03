(function(){
    'use strict';
    angular
        .module('appTask04')
        .controller('appController', AppController);

    AppController.$inject = ['$scope'];

    function AppController($scope) {
         var someLiteral = 'Hello w!';

        function DoSomething() {

        }

        angular.extend($scope, {
            externalVar: someLiteral,
            doSomethingExt: DoSomething
        });

    }
})();