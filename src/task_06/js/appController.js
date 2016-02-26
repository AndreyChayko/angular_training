(function(){
    'use strict';
    angular
        .module('appTask06')
        .controller('appController', AppController);

    AppController.$inject = ['$scope', '$timeout', 'TaskService'];

    function AppController($scope, $timeout, TaskService) {
        $scope.valueOp = 'textSOMEEEE';

        $scope.task = {
            text: ''
        };
        
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


        $scope.createTask = function () {
            TaskService.createTask($scope.task);
        }
    }
})();