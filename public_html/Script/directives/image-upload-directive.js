angular.module('DemoApp')
        .directive('image', function () {
            return {
                templateUrl: 'templates/image-upload.html',
                controller: 'imagectrl',
                replace:true
            }
        });