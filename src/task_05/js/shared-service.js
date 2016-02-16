(function(){
    'use strict';
    angular
        .module('appTask04')
        .service('DataService', DataService);

    function DataService() {
        var service = {};

        service.serviceValueToShare = 'hello from service';

        service.getValue = function() {
            return service.serviceValueToShare;
        };

        service.setValue = function(value) {
          service.serviceValueToShare = value;
        };

        return service;
    }
})();
