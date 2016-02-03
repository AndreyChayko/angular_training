(function(){
    'use strict';
    angular
        .module('appTask03')
        .controller('appController', AppController);

    AppController.$inject = ['$scope'];

    function AppController($scope) {
        var vm = this;

        vm.someLiteral = 'Hello!';
    }
})();