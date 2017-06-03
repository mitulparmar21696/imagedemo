angular.module('DemoApp')
        .directive('menu', function () {
            return {
                templateUrl: 'templates/menu.html',
                controller: 'menuctrl',
                replace:true
            }
        });