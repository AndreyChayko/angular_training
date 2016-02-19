(function(){
    'use strict';
    angular
        .module('appTask06')
        .controller('appController', AppController);

    AppController.$inject = ['$scope', '$timeout'];

    function AppController($scope, $timeout) {
        $scope.valueOp = 'textSOMEEEE';
        
        $scope.changeValueByTimer = function () {
            $timeout(function(){
                $scope.valueOp = 'fooooooooooooooooo';
            }, 1000);
        };

        $scope.changeValueByTimeout = function () {
            setTimeout(function () {
                $scope.valueOp = 'booooooooooooooooo';
            }, 3000);
        };

        $scope.changeValueByTimer();
        $scope.changeValueByTimeout();
    }
})();