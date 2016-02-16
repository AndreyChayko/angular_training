(function () {
    'use strict';

    angular.module('appTask04')
        .directive('outer', Outer);

    Outer.$inject = ['DataService'];

    function Outer(DataService) {
        return {
            restrict: 'E',
            controller: function ($scope) {
                $scope.someValue = '';
                $scope.getValue = function() {
                    $scope.someValue = DataService.getValue();
                };
            },
            templateUrl: 'templates/directive-two-template.html'
        }
    }
})();