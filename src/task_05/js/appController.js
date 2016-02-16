(function(){
    'use strict';
    angular
        .module('appTask04')
        .controller('appController', AppController);

    AppController.$inject = ['$scope'];

    function AppController($scope) {
        $scope.valueOp = 'textSOMEEEE';
    }
})();