function Tab() {
    return {
        restrict: 'E',
        scope: {
            label: '@'
        },
        require: '^tabControl',
        transclude: true,
        templateUrl: 'templates/tab-template.html',
        link: function ($scope, $element, $attrs, $ctrl) {
            $scope.tab = {
                label: $scope.label,
                selected: false
            };
            $ctrl.addTab($scope.tab);
        }
    }
}

function TabControl() {
    return {
        restrict: 'E',
        scope: {},
        transclude: true,
        controller: ['$scope', function ($scope) {
            $scope.tabs = [];
            this.addTab = function addTab(tab) {
                $scope.tabs.push(tab);
            };
            $scope.selectTab = function selectTab(index) {
                for (var i = 0; i < $scope.tabs.length; i++) {
                    $scope.tabs[i].selected = false;
                }
                $scope.tabs[index].selected = true;
            };
        }],
        link: function ($scope, $element, $attrs, $ctrl) {
            $scope.selectTab(2);
        },
        templateUrl: 'templates/tab-control-template.html'
    };
}

angular
    .module('appTask02', [])
    .directive('tab', Tab)
    .directive('tabControl', TabControl);
