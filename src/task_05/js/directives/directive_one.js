(function () {
    'use strict';

    angular.module('appTask04')
        .directive('inner', Inner);

    Inner.$inject = ['DataService'];

    function Inner(DataService) {
        return {
            restrict: 'E',
            controller: function ($scope) {
                $scope.someData = DataService.serviceValueToShare;
                $scope.setValue = function () {
                    DataService.setValue($scope.someData);
                }
            },
            templateUrl: 'templates/directive-one-template.html'
        }
    }
})();