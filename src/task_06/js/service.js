(function () {
    'use strict';
    angular
        .module('appTask06', [])
        .factory('TaskService', TaskService);

    TaskService.$inject = ['$http'];

    function TaskService($http) {
        var DataService = {};
        
        
        DataService.createTask = function (task) {
            return $http.post('https://jsfeajax.herokuapp.com/AndreyChayko/todo', task);
        };

        DataService.getAllTasks = function () {
            return $http.get('https://jsfeajax.herokuapp.com/AndreyChayko/todo');
        };

        return DataService;

    }
})();