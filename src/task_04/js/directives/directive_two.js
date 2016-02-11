(function () {
    'use strict';

    angular.module('appTask04')
        .directive('outer', Outer);

    function Outer() {
        return {
            restrict: 'E',
            controller: function ($scope) {
                $scope.someValue = '';
                $scope.$on('valueChanged', function(e, data) {
                    $scope.someValue = data;
                })
            },
            templateUrl: 'templates/directive-two-template.html'
        }
    }
})();