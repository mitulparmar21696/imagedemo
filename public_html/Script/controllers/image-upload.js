'use strict';
angular.module('DemoApp')
        .controller('imagectrl', function ($scope, $timeout) {
            
            $scope.thumbnail = {
                dataUrl: 'adsfas'
            };
            $scope.fileReaderSupported = window.FileReader != null;
            $scope.photoChanged = function (files) {
                debugger;
             
                
                if (files != null) {
                    var file = files[0];
                    if ($scope.fileReaderSupported && file.type.indexOf('image') > -1) {
                        $timeout(function () {
                            var fileReader = new FileReader();
                            fileReader.readAsDataURL(file);
                            fileReader.onload = function (e) {
                                $timeout(function () {
                                    $scope.thumbnail.dataUrl = e.target.result;
                                });
                            }
                        });
                    }
                }
            };
        });