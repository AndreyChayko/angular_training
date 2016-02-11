(function () {
    'use strict';

    angular.module('appTask04')
        .directive('inner', Inner);

    function Inner() {
        return {
            restrict: 'E',
            controller: function ($scope) {
                $scope.someData = '';
                $scope.setValue = function () {
                    $scope.$broadcast('valueChanged', $scope.someData);
                }
            },
            templateUrl: 'templates/directive-one-template.html'
        }
    }
})();